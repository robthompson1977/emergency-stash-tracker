// Service Worker for Pantry PWA Notifications
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Listen for incoming messages from your main app or webhooks
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const title = event.data.title || 'Pantry Alert';
        const options = {
            body: event.data.body || 'Items require your attention.',
            icon: './icon.png', // Optional: Add a small icon to your repo if desired
            badge: './icon.png',
            vibrate: [200, 100, 200]
        };
        event.waitUntil(
            self.registration.showNotification(title, options)
        );
    }
});
