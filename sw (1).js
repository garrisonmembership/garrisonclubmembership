// Simple service worker - no caching, always fetch fresh
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
