import { verifyToken } from '@clerk/backend';
import { getProgressCollection } from './_lib/db.js';

const MAX_PAYLOAD_BYTES=120_000;
function response(res, code, data){return res.status(code).json(data)}
function validState(s){
  if(!s||typeof s!=='object'||Array.isArray(s))return false;
  if(!Array.isArray(s.completed)||!Array.isArray(s.bookmarks)||!s.notes||typeof s.notes!=='object'||Array.isArray(s.notes))return false;
  if(s.completed.length>100||s.bookmarks.length>100)return false;
  if(s.completed.some(x=>typeof x!=='string'||x.length>100)||s.bookmarks.some(x=>typeof x!=='string'||x.length>100))return false;
  for(const [key,val] of Object.entries(s.notes)){if(key.length>100||typeof val!=='string'||val.length>5000)return false}
  return true;
}
function getAllowedOrigins(){return (process.env.APP_ORIGIN||'').split(',').map(s=>s.trim()).filter(s=>s.startsWith('https://')||s.startsWith('http://localhost:'));}
export default async function handler(req,res){
  res.setHeader('Cache-Control','no-store');
  res.setHeader('X-Content-Type-Options','nosniff');
  if(!['GET','PUT'].includes(req.method)){
    res.setHeader('Allow','GET, PUT');
    return response(res,405,{error:'Method not allowed'});
  }
  const allowedOrigins=getAllowedOrigins();
  if(!process.env.CLERK_SECRET_KEY||!process.env.MONGODB_URI||!allowedOrigins.length)
    return response(res,503,{error:'Cloud is not configured by the website owner.'});
  const match=/^Bearer\s+([^\s]+)$/i.exec(req.headers.authorization||'');
  if(!match)return response(res,401,{error:'Please sign in before syncing.'});
  let userId;
  try{
    const verified=await verifyToken(match[1],{
      secretKey:process.env.CLERK_SECRET_KEY,
      authorizedParties:allowedOrigins
    });
    if(!verified?.sub || typeof verified.sub!=='string')return response(res,401,{error:'Invalid session'});
    userId=verified.sub;
  }catch{return response(res,401,{error:'Invalid or expired sign-in. Please sign in again.'});}
  try{
    const collection=await getProgressCollection();
    if(req.method==='GET'){
      const doc=await collection.findOne({_id:userId},{projection:{state:1,revision:1,updatedAt:1}});
      return response(res,200,doc?{exists:true,state:doc.state,revision:doc.revision||0,updatedAt:doc.updatedAt}:{exists:false,revision:0});
    }
    const input=typeof req.body==='string'?JSON.parse(req.body):req.body;
    if(!input || Buffer.byteLength(JSON.stringify(input),'utf8')>MAX_PAYLOAD_BYTES||!validState(input.state))
      return response(res,400,{error:'Invalid or excessively large study progress.'});
    const revision=input.revision;
    if(!Number.isSafeInteger(revision)||revision<0)return response(res,400,{error:'Invalid version number.'});
    const now=new Date();
    try{
      const result=await collection.updateOne(
        {_id:userId,revision},
        {$set:{state:input.state,updatedAt:now},$setOnInsert:{createdAt:now},$inc:{revision:1}},
        {upsert:revision===0}
      );
      if(!result.matchedCount && !result.upsertedCount){
        const latest=await collection.findOne({_id:userId},{projection:{state:1,revision:1}});
        return response(res,409,{error:'Cloud save changed on another device.',current:latest?{exists:true,revision:latest.revision,state:latest.state}:{exists:false,revision:0}});
      }
      return response(res,200,{ok:true,revision:revision+1,updatedAt:now});
    }catch(err){
      // Concurrent insert / stale revision can hit a duplicate-key race.
      if(err?.code===11000){
        const latest=await collection.findOne({_id:userId},{projection:{state:1,revision:1}});
        return response(res,409,{error:'Save conflict.',current:latest?{exists:true,revision:latest.revision,state:latest.state}:{exists:false,revision:0}});
      }
      throw err;
    }
  }catch(err){
    console.error('Cloud progress API error:',err?.message);
    return response(res,500,{error:'Database temporarily unavailable. Your browser copy has been kept.'});
  }
}
