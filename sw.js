/**
 * sw.js - Versioning Update Logic
 */
const CACHE_NAME = 'phasmo-v2026-v1'; // 更新時はここを変更
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './ghosts.js',
    './app.js',
    './manifest.json'
];

// インストール時にキャッシュ
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
    self.skipWaiting(); // 新しいSWを即座に有効化
});

// 古いキャッシュのクリーンアップ
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
});

// フェッチ（キャッシュ優先、なければネットワーク）
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});