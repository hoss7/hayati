const C='hayati-v4';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./manifest.json','./icon.svg','./icon-180.png','./icon-192.png','./icon-512.png'])).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET')return;
  if(u.origin===location.origin){e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))}});
self.addEventListener('notificationclick',e=>{e.notification.close();const action=e.action||'open',tag=e.notification.tag;
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{cs.forEach(c=>c.postMessage({type:'notif',action,tag}));
    if(action!=='open'&&cs.length)return;for(const c of cs){if('focus'in c)return c.focus()}return self.clients.openWindow('./index.html#today')}))});
