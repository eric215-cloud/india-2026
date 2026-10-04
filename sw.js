/* Enchanting India — service worker
   NETWORK FIRST: when the phone is online it always loads the latest
   version from GitHub, so edits you publish show up right away. The copy it
   saves is only used when there's no signal (on a plane, in an airport,
   between towers), so the app still opens with your saved info.

   Weather requests (other websites) are not touched.
   To retire this worker later, replace this file's contents with:
     self.addEventListener('install',()=>self.skipWaiting());
     self.addEventListener('activate',e=>e.waitUntil(self.registration.unregister()));
*/
const CACHE = 'india2026-v2';   // bump when the file list changes
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'hero-bg.webp', 'icon-180.png',
  'day-jal-mahal.webp', 'day-amer-fort.webp', 'day-pashupatinath.webp'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).catch(() => {}).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('india2026-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;          // weather etc.: straight to network
  e.respondWith((async () => {
    try {
      // Fetch by URL (a navigation Request can't be re-issued with options) and
      // revalidate with GitHub every time instead of trusting the 10-minute HTTP cache.
      const fresh = await fetch(url.href, { cache: 'no-cache', credentials: 'same-origin' });
      if (fresh && fresh.ok) {
        const copy = fresh.clone();
        // every page visit (with or without ?today=…) is stored as the one app page
        const key = req.mode === 'navigate' ? new URL('index.html', self.registration.scope).href : req;
        caches.open(CACHE).then(c => c.put(key, copy)).catch(() => {});
      }
      return fresh;
    } catch (err) {
      const hit = await caches.match(req, { ignoreSearch: true });
      if (hit) return hit;
      if (req.mode === 'navigate') {
        const shell = await caches.match('index.html') || await caches.match('./');
        if (shell) return shell;
      }
      throw err;
    }
  })());
});
