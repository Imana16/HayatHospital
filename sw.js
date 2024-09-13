self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
            '/HayatHospital/',  // Update this path
            '/HayatHospital/index.html',  // Update this path
            '/HayatHospital/styles/hayathospital.css',  // Update this path
            '/HayatHospital/scripts/script.js',  // Update this path
            '/HayatHospital/favicons/favicon-32x32.png',  // Update this path
            '/HayatHospital/favicons/favicon-16x16.png'  // Update this path
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });