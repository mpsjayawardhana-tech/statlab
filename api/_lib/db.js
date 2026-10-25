import { MongoClient } from 'mongodb';

// Keep the connection promise across warm Vercel function invocations.
let clientPromise;
export async function getProgressCollection() {
  const uri=process.env.MONGODB_URI;
  if (!uri) throw Error('MONGODB_URI is not configured');
  if (!clientPromise) {
    const client=new MongoClient(uri,{maxPoolSize:5,serverSelectionTimeoutMS:7000});
    clientPromise=client.connect().catch(err=>{clientPromise=null;throw err});
  }
  return (await clientPromise).db(process.env.MONGODB_DB||'pcg_statlab').collection('progress');
}
