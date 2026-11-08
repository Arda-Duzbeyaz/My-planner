/* Change VERSION with every release that changes app files. Progress uses localStorage, never this cache. */
const VERSION='1.1.5';
const PREFIX='my-plan-app-'+encodeURIComponent(new URL(self.registration.scope).pathname)+'-';
const CACHE=PREFIX+VERSION;
const FILES=['./','./index.html','./styles.css','./app.js','./engine.js','./storage.js','./progress.js','./data.js','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./icon-maskable.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith(PREFIX)&&key!==CACHE)await caches.delete(key);await self.clients.claim();})());});
self.addEventListener('fetch',event=>{
 const req=event.request,url=new URL(req.url),scope=new URL(self.registration.scope);
 if(req.method!=='GET'||url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;
 if(req.mode==='navigate'&&(url.pathname===new URL('./',scope).pathname||url.pathname===new URL('./index.html',scope).pathname)){
  event.respondWith((async()=>{const cache=await caches.open(CACHE);const shell=await cache.match(new URL('./index.html',scope).href);if(shell)return shell;try{return await fetch(req);}catch{return new Response('Open My Plan online once to prepare offline use.',{status:503,headers:{'Content-Type':'text/plain'}});}})());return;
 }
 const known=FILES.map(p=>new URL(p,scope).pathname).includes(url.pathname);
 if(known)event.respondWith((async()=>{const cache=await caches.open(CACHE);const hit=await cache.match(req,{ignoreSearch:true});return hit||fetch(req);})());
});
