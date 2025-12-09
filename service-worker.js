
self.addEventListener('install', e=>{
 e.waitUntil(
   caches.open('v1').then(cache=>cache.addAll([
     'index.html','data.json','manifest.json','icon192.png','icon512.png'
   ]))
 );
});
self.addEventListener('fetch', e=>{
 e.respondWith(
   caches.match(e.request).then(resp=>resp || fetch(e.request))
 );
});
