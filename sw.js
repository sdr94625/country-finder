/* eslint-disable no-unused-vars */
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime'

const PRECACHE_URLS = [
    'public/maskable_icon_x512.png',
    'index.html',
    'src/main.jsx',
    'src/App.jsx',
    'src/App.css',
    'sw.js'
];

self.addEventListener('install', (event) => {
    console.log('installed');
    event.waitUntil(
        caches.open(PRECACHE).then((cache) => {
            return cache.addAll(PRECACHE_URLS)
        })
    )
})

self.addEventListener('activate', () => {
    console.log('Service worker activating...')
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request)
        })
    )
})