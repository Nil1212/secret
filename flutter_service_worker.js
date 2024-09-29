'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f69af5b295b63a332d0d21fa8e4b3460",
"assets/AssetManifest.bin.json": "3d21f0bcbcfc11b0695e96f8c10be166",
"assets/AssetManifest.json": "48bc7d1d0feab5b3917ea473a752a996",
"assets/assets/images/photo_2024-06-11_21-55-37.jpg": "7ce1d4cf369bcb92ff82ff24805ea999",
"assets/assets/images/photo_2024-06-11_21-55-53.jpg": "9f5791ad26a87fa5fc3b2487a3955560",
"assets/assets/images/photo_2024-07-11_11-14-28.jpg": "1997bd1f5568db59d41d71d212894ae1",
"assets/assets/images/photo_2024-08-06_21-29-57.jpg": "c41d0e36fb4bc22aa6b5de9fe1d4021d",
"assets/assets/images/photo_2024-08-06_21-30-00.jpg": "59216246648cdd369e0286a84a6ea12f",
"assets/assets/images/photo_2024-08-06_21-30-03.jpg": "ea564f98c149aaa46d4910cfbfe381b2",
"assets/assets/images/photo_2024-08-06_21-30-06.jpg": "47b84487a0cf7818725abfb43139fb0b",
"assets/assets/images/photo_2024-08-06_21-30-09.jpg": "cfc539c790622ee03fcd16f6004f328e",
"assets/assets/images/photo_2024-08-06_21-30-12.jpg": "721b121f0d9658b2c58f9015d359d0b6",
"assets/assets/images/photo_2024-08-28_08-52-01.jpg": "d75feade31cb8e772d6b04ace0896d06",
"assets/assets/images/photo_2024-09-03_12-36-19.jpg": "123ccad59dd1257fa13286a285711fc2",
"assets/assets/images/photo_2024-09-10_12-33-07%2520(2).jpg": "93c14808761b64ecb3719f393456d407",
"assets/assets/images/photo_2024-09-10_12-33-07%2520(3).jpg": "12e45722997a2d9dd472e787322b9f3a",
"assets/assets/images/photo_2024-09-10_12-33-07.jpg": "b82806b4e0acccf96f24a3d196d93408",
"assets/assets/images/photo_2024-09-10_12-33-25.jpg": "56677908b363c0ec6ab0397acfa1d673",
"assets/assets/images/photo_2024-09-11_07-25-22.jpg": "e9831ab962fd737dbcd6954177ea4de4",
"assets/assets/images/photo_2024-09-11_07-25-28.jpg": "0b272d5758dcf2c1ed5fcef177f1584b",
"assets/assets/images/photo_2024-09-13_18-30-12.jpg": "74fd9208c1ef57b1a672aa3699c65c86",
"assets/assets/images/photo_2024-09-13_18-30-18.jpg": "e0df6001b068b0a3f2f7a7d56e2df82b",
"assets/assets/images/photo_2024-09-13_18-30-22.jpg": "2f446dbf3d8fcbd144cf4439e8f4d884",
"assets/assets/images/photo_2024-09-13_18-30-25.jpg": "693b96c4b3a4e9831a6f8cb93ef3c7aa",
"assets/assets/images/photo_2024-09-23_18-07-04.jpg": "9c00c45215fd80ed9a83c79ece1ff3cb",
"assets/assets/images/photo_2024-09-23_18-09-45.jpg": "5597ff71f8a1a4ba0fc5d8f8b288e9c2",
"assets/assets/images/photo_2024-09-23_18-09-48.jpg": "69244312c7f418011ebe75a2dd013a72",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "b4112cdd4aa5bc4bb1fe0b135458ef4f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "ab8ca0f9ec3bb71bc6dd2313aab978f3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "89205208941fc39bf0cc1e693baa373a",
"/": "89205208941fc39bf0cc1e693baa373a",
"main.dart.js": "313b1bc3dc730959432e8b7ad24f8e38",
"manifest.json": "e5e0714dc03dd1f0df4119cb6db3a3df",
"version.json": "d7dd0b7f142c5a5099bb166ea5aa3518"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
