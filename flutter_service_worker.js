'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8f4a529534e063e5b06facd83436e14",
".git/config": "87a1c376296c32b55cbb613b393a6063",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ac93b1fe2c61bf5f24a0585c66769ecb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "82aefdb62d7a600fa62207cefc08dae6",
".git/logs/refs/heads/main": "58ac980ba319d508d569ed2f4cd07eda",
".git/logs/refs/remotes/origin/main": "0f362ebe4cae71a6746b7f2393cc378f",
".git/objects/03/0adb7af5ffffa0f331468e58a48990eb521846": "01980bc9352b9878c4c22f200042e4d8",
".git/objects/06/37dbbcb880bd217079137bf523d4862c81252b": "31a37cbd62d1d640c33ec4e4631a3714",
".git/objects/16/4c881f0239ab65179eaa69f6b5b5462ba83f15": "47d0ac12e35f8612c374e6546b2a45e0",
".git/objects/19/aada513d28f47c0408301c06157685e57b349e": "39fd8f47df1e6e6fdf162d661ca15075",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1f/ac4b23c3e843c9c495561ce20f1338ebb21188": "c17db2efa9239ddaf4710ccc415ef159",
".git/objects/22/1a8bcaea901c562aa3d893b6033af8c0e7d34b": "84106149de51fd3e7eb15c36cad187dc",
".git/objects/22/b047f89d371cdf53c761d49be105581cc30b5f": "ef3894bc0377201958593b6f2582946e",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2c/12811ba51152c3600772257ce200c37f5c9a05": "ff613a9fde466332c3342fceac3394f9",
".git/objects/2e/0adee31a808dd7787f1f4fd35c295caaffc1a6": "46678ce4e1870901234d1fad40423d77",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3b/5780ac5f34904269ff573bd2736cdeb951b8ab": "f1b0e26a2e44f278b00ddaf0dac43442",
".git/objects/3c/15a7f0aa3e64d8317475b743657f1afd09d2ec": "efeef95ffaf65a953b500144a0f3008c",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/47/8940a247c809903511c306ddfbf8ab476da2bb": "40bc8a4ab8564cd07c241cf9240182d6",
".git/objects/4d/44181600e9744f4322517dccbe789e13add7af": "9afd262bc8caf242860d8aa9e78ec8bc",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/e6b72934d0532efa61ddd5646ac9a346534100": "190e9b685fa39f16b95d553a6324ced5",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/e78b39269742cad3ed53239aeaf997c51f87a4": "4bc4b113f142ff95e1aecfa1076fe390",
".git/objects/66/059d1b88cd3b80fc5d8eb0949d2de65248a81e": "4d7be78b982236651252ec236d8e9553",
".git/objects/69/0050f80849324c924c4637a2414848a4c846ef": "0797fea44866208febc02e59c1bc9ccf",
".git/objects/69/0ce82ae431b0a7fa2bf27fd035cd263de3b666": "598906f1539dbfb58f289d9b6f04c47f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8e/033b951af0cda62a6b644a26c29f67677bb30f": "08fd5cd633b487cf684171c022359ebb",
".git/objects/8f/3870e4ab83fa703f5a4ad68bdae281207004d0": "5b411d6175fcb744788e5b4b970f1edb",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/d6532c6ce9d4e7b3d0ba7b31e25108078d2076": "dec5fd8a6cd248392d1b34fe5ba0377d",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/36ee2ddcfe707dcfd135fe5d77c4a010a15d5d": "b237c0cd07224a6bfba3c705e180b532",
".git/objects/ce/89e12ea03ab1c8b3e3e5879762f19f70cc9a2d": "fb0aeef71459af91863baf3b1cdcb32c",
".git/objects/d3/ecede3eb7651daf53bd4ef087d1883c7198d1a": "3e3935110d67ab7b8f03cbcb21efb8a1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/27cfc053dff6a63549a5a4bb5b24cf16491cd0": "f2dd5017f6aa4dc6da028b9092c4e629",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/004325e35263e8fc2ca68304403735cdc5d7bc": "3e1a654e314cf52b389a8600967d6df6",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/ed3dcf383ee3fd1bb5dde09eda87e3c6a0a73a": "2efde27cbb13f262c0408fc2e45dfdd2",
".git/objects/e2/6d6dd226d37b682281d2fffa1f16414ebbf439": "550c6acfff8875f4c2fbba61276b267d",
".git/objects/e5/7123b04a2c7cde88ecad2d4e77a32189cdfac1": "aa1d0d514351e794026423179f9413ef",
".git/objects/e5/e463ffd3ed80c97c1b60f9d608fda8053b8b51": "acc99b4a79be91050ab9ba882b69a40e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/186fdb3f6279b809ede42c38e76e82edeb7ba8": "9aa07b22825698ba481dad9b3927ddd4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/bfb0ab854a396f515c3f46723512682c617a2c": "20a2d523ece90946a6bc5773d38eb27a",
".git/refs/heads/main": "f653d82f26974a80f17343b33a9a48cb",
".git/refs/remotes/origin/main": "f653d82f26974a80f17343b33a9a48cb",
"assets/AssetManifest.bin": "a75af1d93b1934ea13d7b243bf546d4c",
"assets/AssetManifest.bin.json": "269f02e0d390d46029cd9a22ef664ccc",
"assets/AssetManifest.json": "25521dfb173e3301d5d037cbd8a22aa9",
"assets/assets/animations/coding.json": "5dcca909130c343559cf03007d383850",
"assets/assets/images/demandlab.webp": "4eb28a9f5129f55681eed23bc4e20d60",
"assets/assets/images/hyiplab.webp": "3e75ee12cf1cb0bc18131e3e49740e60",
"assets/assets/images/me.png": "a3b21ea74838b1ab4283510a4cb870ce",
"assets/assets/images/me_2.png": "e2ad82fa242e2e33f0cd2203ab295ae9",
"assets/assets/images/minelab.png": "f01944fff0054375ae6b51bea1fa3c40",
"assets/assets/images/signallab.webp": "5e4dba43cbd6841d432c43e1c08fac08",
"assets/assets/images/viser-bank.webp": "e6c4e6e8d51e3c9a95a89bb51ee7fae4",
"assets/assets/images/xcash.webp": "809d2c9c509f2b5275f95bd2ccfcbbbb",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "b6bf97f19e75c2ea1e6e0d083dd3aa53",
"assets/NOTICES": "8b9eeb92fe81d63c87c181aa091a62b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "9150abb34327645c326fcb760644a870",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "20eead89a6aecd72dd2c571517ba4b08",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "b239195660efcf383c3ec98ea363d04e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3576d9f4757bfb299288bf0d562c8dda",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ca42a21897abf2725eb2691883ff5bf6",
"/": "ca42a21897abf2725eb2691883ff5bf6",
"main.dart.js": "c3142d00f03bc5228d673610e42a4a09",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
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
