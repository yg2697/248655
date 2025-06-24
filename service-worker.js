self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('j-gukto').then(function(cache) {
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
