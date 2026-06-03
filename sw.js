const CACHE_NAME = 'garrison-club-v1';
const urlsToCache = ['/garrisonclubmembership/', '/garrisonclubmembership/index.html'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
