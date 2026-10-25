/* PCG STATLAB Cloud Sync — optional signed-in, per-user MongoDB backup.
   Private credentials stay on the server; session tokens are ephemeral. */
(() => {
  'use strict';
  const bridge=window.PCG_STATLAB_BRIDGE;
  if(!bridge) return;
  const $=id=>document.getElementById(id);
  const markerKey='PCG_STATLAB_CLOUD_MARKER_V1';
  let clerk=null,userId=null,revision=0,ready=false,busy=false,saveTimer=null,retryPending=false,initialized=false;
  const byId=$('cloudBtn'),overlay=$('cloudOverlay'),statusEl=$('cloudStatus'),choicesEl=$('cloudChoices');
  const currentMarker=()=>{try{return JSON.parse(localStorage.getItem(markerKey)||'{}')}catch{return {}}};
  const writeMarker=m=>{try{localStorage.setItem(markerKey,JSON.stringify(m))}catch{}};
  const meaningful=s=>!!(s&&(s.completed?.length||s.bookmarks?.length||Object.keys(s.notes||{}).some(k=>s.notes[k])||Object.keys(s.lessonAnswers||{}).length||Object.keys(s.quizAnswers||{}).length||s.quizSubmitted));
  const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
  function status(msg,label){statusEl.textContent=msg;$('cloudTopLabel').textContent=label|| (ready?'Synced account':'Cloud save');}
  function showChoices(rows){choicesEl.replaceChildren();for(const row of rows){const btn=document.createElement('button');btn.className='cloud-choice'+(row.secondary?' secondary':'');btn.textContent=row.label;btn.addEventListener('click',row.action);choicesEl.appendChild(btn)}}
  function open(){overlay.classList.add('open');overlay.setAttribute('aria-hidden','false')}
  function close(){overlay.classList.remove('open');overlay.setAttribute('aria-hidden','true')}
  byId?.addEventListener('click',open);
  $('cloudClose')?.addEventListener('click',close);
  overlay?.addEventListener('click',e=>{if(e.target===overlay)close()});
  window.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay.classList.contains('open'))close()});
  function setReady(on){ready=on;if(on)writeMarker({userId,dirty:false});}
  async function api(method='GET',data){
    const token=await clerk?.session?.getToken();
    if(!token)throw Error('Your session has expired. Please sign in again.');
    const res=await fetch('/api/progress',{
      method,headers:{Authorization:'Bearer '+token,...(data?{'Content-Type':'application/json'}:{})},
      body:data?JSON.stringify(data):undefined,cache:'no-store',credentials:'same-origin'
    });
    const result=await res.json().catch(()=>({error:'Unexpected server response.'}));
    if(!res.ok){const ex=new Error(result.error||'Cloud request failed ('+res.status+')');ex.status=res.status;ex.info=result;throw ex}
    return result;
  }
  function updateLocal(next){bridge.applyState(next)}
  async function saveToCloud(){
    if(!ready||!userId||busy){retryPending=true;return}
    busy=true;retryPending=false;status('Saving securely to MongoDB…','Saving…');
    const snapshot=bridge.getState();
    try{
      const result=await api('PUT',{state:snapshot,revision});
      revision=result.revision;
      const newerChanges=!same(snapshot,bridge.getState());
      writeMarker({userId,dirty:newerChanges});
      status(newerChanges?'Saved, syncing latest edits…':'All changes saved to your account.','Saved ✓');
      if(newerChanges)retryPending=true;
    }catch(e){
      if(e.status===409){
        ready=false;
        const remote=e.info?.current;
        status('Both devices have changes. Choose which version to keep. Your local copy is safe.','Choose save');
        if(remote)showReconciliation(remote,'Two devices have different saves.');
      } else {
        retryPending=true;
        status('Cloud is currently unavailable. Work remains saved on this device. You can retry.','Offline save');
        showChoices([{label:'↻ Retry cloud save',action:()=>saveToCloud()},{label:'Continue offline',secondary:true,action:close}]);
      }
    }finally{
      busy=false;
      if(retryPending&&ready) {retryPending=false;queueSave()}
    }
  }
  function queueSave(){if(!ready||!userId)return;clearTimeout(saveTimer);saveTimer=setTimeout(saveToCloud,1700)}
  window.PCGCloud={
    onLocalSave(){
      const m=currentMarker();
      if(m.userId)writeMarker({...m,dirty:true});
      if(ready&&userId)queueSave();
    }
  };
  function useRemote(remote){
    if(remote.state)updateLocal(remote.state);
    revision=remote.revision||0;setReady(true);
    showChoices([{label:'✓ Cloud backup connected',action:close,secondary:true}]);
    status('Cloud data loaded. Future changes will save automatically.','Saved ✓');
  }
  function useDevice(remote){
    revision=remote.revision||0;setReady(true);
    showChoices([]);status('Uploading this device’s saved data…','Saving…');
    saveToCloud();
  }
  function showReconciliation(remote,prompt){
    status(prompt+' Nothing is deleted until you choose an option.','Choose save');
    showChoices([
      remote.exists
       ? {label:'↓ Use cloud progress on this device',action:()=>useRemote(remote)}
       : {label:'Start fresh in this account (clear old local progress)',action:()=>{if(window.confirm('Start a fresh account? Back up your local progress with Export first if you need it.')){updateLocal({completed:[],bookmarks:[],notes:{},lessonAnswers:{},quizAnswers:{},quizSubmitted:false,quizItems:[]});useDevice(remote)}}},
      {label:remote.exists?'↑ Upload this device and replace cloud progress':'↑ Copy this device’s progress into the new account',secondary:true,action:()=>{
        if(window.confirm(remote.exists?'Replace the cloud copy with progress from this device?':'Copy this device’s existing local progress into this new account?'))useDevice(remote)
      }},
      {label:'Not now — keep working only on this device',secondary:true,action:()=>{ready=false;close()}}
    ]);
    open();
  }
  async function loadUser(){
    if(!clerk?.user||!clerk.session){userId=null;ready=false;status('Sign in to enable private cloud backups. Local studying works without an account.');showChoices([]);$('cloudUser').replaceChildren();$('cloudSignIn').hidden=false;return;}
    const nextId=clerk.user.id;
    if(nextId===userId && ready)return;
    ready=false;userId=nextId;
    status('Looking for your previous cloud backup…','Connecting…');
    showChoices([]);
    $('cloudSignIn').hidden=true;
    const userEl=$('cloudUser');userEl.replaceChildren();
    const mount=document.createElement('div');userEl.appendChild(mount);
    try{clerk.mountUserButton(mount)}catch(_){ }
    const logout=document.createElement('button');logout.className='cloud-choice secondary';logout.style.width='auto';logout.textContent='Sign out';logout.onclick=()=>clerk.signOut();userEl.appendChild(logout);
    let remote;
    try{remote=await api('GET')}
    catch(e){status('Sign-in successful. Cloud database not ready: '+e.message+' Local saves still work.','Local only');showChoices([{label:'↻ Retry connection',action:loadUser},{label:'Continue offline',secondary:true,action:close}]);return}
    if(clerk.user?.id!==nextId)return;
    const local=bridge.getState(),m=currentMarker();
    if(remote.exists){
      revision=remote.revision;
      if(!meaningful(local)||same(local,remote.state)||(m.userId===userId&&!m.dirty))useRemote(remote);
      else showReconciliation(remote,'We found both a device save and a cloud save.');
    }else{
      revision=0;
      if(m.userId&&m.userId!==nextId&&meaningful(local)){
        showReconciliation({exists:false,revision:0,state:null},'This browser contains another account’s previous local progress.');
      }else{
        useDevice(remote);
      }
    }
  }
  function loadScript(url,attributes={}){
    return new Promise((resolve,reject)=>{
      const script=document.createElement('script');script.src=url;script.defer=true;script.crossOrigin='anonymous';
      for(const [k,v] of Object.entries(attributes))script.setAttribute(k,v);
      script.onload=resolve;script.onerror=()=>reject(Error('Failed to load secure sign-in service.'));
      document.head.appendChild(script);
    });
  }
  async function start(){
    if(initialized)return;initialized=true;
    try{
      const resp=await fetch('/api/config',{cache:'no-store'});
      if(!resp.ok)throw Error('Cloud API unavailable.');
      const conf=await resp.json();
      if(!conf.enabled||!conf.clerkPublishableKey){status('Cloud is not configured yet. Website lessons still work and save locally.','Local only');return}
      const pk=conf.clerkPublishableKey;
      const encoded=pk.split('_')[2];
      if(!encoded)throw Error('Invalid sign-in configuration.');
      const domain=atob(encoded).replace(/\$$/,'');
      if(!/^[a-z0-9.-]+$/i.test(domain))throw Error('Invalid sign-in domain.');
      await loadScript('https://'+domain+'/npm/@clerk/ui@1/dist/ui.browser.js');
      await loadScript('https://'+domain+'/npm/@clerk/clerk-js@6/dist/clerk.browser.js',{'data-clerk-publishable-key':pk});
      clerk=window.Clerk;
      if(!clerk)throw Error('Sign-in script did not initialize.');
      await clerk.load({ui:{ClerkUI:window.__internal_ClerkUICtor}});
      if(!clerk.user){
        clerk.mountSignIn($('cloudSignIn'));
      }
      clerk.addListener(({user})=>{
        if(user?.id!==userId){
          if(!user){userId=null;ready=false;status('Signed out. Notes remain on this device.','Cloud save');$('cloudUser').replaceChildren();$('cloudSignIn').hidden=false;showChoices([]);try{clerk.mountSignIn($('cloudSignIn'))}catch(_){}}
          else loadUser();
        }
      });
      await loadUser();
    }catch(e){
      status('Cloud setup needs attention: '+e.message+' Local studying continues.','Local only');
      console.warn('PCG cloud sync initialization:',e);
    }
  }
  window.addEventListener('online',()=>{if(ready&&currentMarker().dirty)queueSave()});
  start();
})();
