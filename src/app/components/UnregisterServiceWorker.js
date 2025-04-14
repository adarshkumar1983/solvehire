'use client';

import { useEffect } from 'react';

export default function UnregisterServiceWorker() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations()
        .then(function(registrations) {
          for (let registration of registrations) {
            registration.unregister();
          }
        })
        .catch(function(err) {
          console.log('Service Worker unregister failed: ', err);
        });
    }
  }, []);

  return null;
}
