self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('j-gukto-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/main.js',
        '/manifest.json'
      ]);
    })
  );
});
