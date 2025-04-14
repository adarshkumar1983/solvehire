'use client';

import { useEffect } from 'react';

export default function UnregisterServiceWorker() {
  useEffect(() => {
    // 🔹 Unregister service workers
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations()
        .then((registrations) => {
          for (let registration of registrations) {
            registration.unregister();
          }
        })
        .catch((err) => {
          console.log('Service Worker unregister failed:', err);
        });
    }

    // 🔹 Delete all old caches
    if ('caches' in window) {
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          caches.delete(cacheName).then((success) => {
            if (success) {
              console.log(`Cache ${cacheName} deleted.`);
            }
          });
        });
      });
    }
  }, []);

  return null;
}
