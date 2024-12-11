'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "007d6ede44f69dec9687103a247ca9e2",
".git/config": "4fc7da5cdcdbd5ab4c0e66d57f01b229",
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
".git/index": "0e90a4713d51887817ed019e054aa4f4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "21d29b351ed27ecec79e17508e478fcd",
".git/logs/refs/heads/main": "21d29b351ed27ecec79e17508e478fcd",
".git/logs/refs/remotes/origin/main": "872dc0918a263c4cfb12c40da6df8823",
".git/objects/00/2349cf8000794f3ff99fc14f50c4da3c87a1e3": "d36a8f6f6b2b0281984aa8a622614a8c",
".git/objects/03/f64e198efcb709ee04fb1d0460ad15983178ac": "e983fd4daff4d3ddd419931216bb0edd",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/796783d1f28f0b13018b3dd9ba2714a9c9ba1f": "b1defa1b3d75a79964bbf9e752ebd787",
".git/objects/1c/f3a17a221c421ffa3d50d53a4dab85beb9dedd": "fcbf6f33e4e8c1a402cce45e8974e8fa",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/71979968a41d8619b0eaddd009d74944919bf0": "b7793c0067d661f4b0367d512886c8be",
".git/objects/24/3229133c3a54a205a9dc2d2c4568c0dac35a83": "e3dcbf15ad4526858835d24873865d30",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/8e5c99504ea33f4058fb6ca563082e165b82d4": "a3fe28b9db60865c3f7ed5d6677d4ab0",
".git/objects/2e/8d069841a5911cd478b77f0100fe18f2d89566": "1eff2cae1b5da28dcdaf365741b25951",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/39/df5c4aba339da0e0e8ded4f9f02507dd05a640": "1be0f7bf629783b4d73af5497b91ea7e",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/d5e944d0e6be7022075bb3b90f16e9e6863ce9": "23e530b2f3961a89a03808b0befe5e28",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/37b1b08ce91d0fe4b231c7f9085689f89fa1b8": "c79cd4036a991d63e5608b23fcaa5f2d",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/c0d0f63bbb088e7db7af36567fbdd072a3a334": "0232d56bd39d5cc6c22e16d9914645c7",
".git/objects/59/aabf7e652e8d2fdfb5a69636217265ba803223": "7969019a67389d6edcb21ffc2349f219",
".git/objects/5b/e9559748b31977a0c655ef0d33d8c7a652e017": "ead0de517d48a5ea20d290ad16e763f6",
".git/objects/60/d8d1fb978fd66ba6b9886fbecafde04d982223": "e234585d6bfe8e5b6fbf945fcd394ed6",
".git/objects/61/c8c79167f0e8535e6b8e2d67e1ae4148277b87": "166478932a7b01896bd77fafb6743ce7",
".git/objects/62/8991b9f21f2f28c7c5cd9be5f980cf8696a923": "10128c1e1f7fe51b42b350a9388ee675",
".git/objects/64/9625dad6bacac6a11916d1b6a5f73fc184f034": "ade03a0e86b47fef201c4a34597f4c6b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/4a6e145968ee282505b2cc67577e0bf3c7e7fa": "12c8dd421469015dd7a6cc0934e31900",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/5a5e537a4385c6c73c85ae619471301501568c": "fcbb3300a094f798fd454efd61cbefc1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/09251510532999e88d3abb75720540924cbb29": "67816640ac5ebf4a62840257372f55f5",
".git/objects/97/7be4a1cabdf49cae78767b5bfa92dc9e51431b": "8fc240bced9c46e3938212bbb777b306",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/74e83f7b3d46ed9f95ae06f5bb7597eab5f0c9": "9a07bef29cb608f0dbe72ac339d914f8",
".git/objects/9e/b899a644cadf4c61cea5e51bcc0447fd0c2bd0": "2190f6ba4c5cdde4dd04d3bc72974948",
".git/objects/a5/858eb5c13db58b6cc62035622392f1e29cae8a": "a8031c4ece1e1cd8db0ceaaa20a4212f",
".git/objects/a6/721a11205ffdc10fc6813f7286c6e053b7ac7b": "5b67606d2ea51ff759e0ede009aec0c7",
".git/objects/a7/1a006565564eea8b08f3671dbf081088c55a64": "25128d727a24b86f6d8ac2747f70928a",
".git/objects/ab/2b5e777a4cb3435d4a2c6ca8cbaac78da7edcf": "9a1ef686eb77c19d5cc9c74c55e9e5b3",
".git/objects/ae/bd107386ceb281be391f830660ba583b23f333": "5d7fb01ae2270ced8667079d57178209",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/43fe85113b50eae1257bfc06071ad6959b7188": "a2040fc1864f159d5740d3166705c4bf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/c846aa4c4cd55d0a9327eeed1c804eb94152eb": "c13b4f8853ee8e9a0d2a5a69212427b8",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cd/194d6b13f514c9cbc510493bd799df56298e3b": "f75402d1657a56aa953f51ced0ba2ed7",
".git/objects/ce/815175ece807ee2b2de4c43914a6854de94edf": "0e9a375d3c38daca14a6f72426d1b486",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/56cdd65ebacf2da3fa040ae6756ab942dd4155": "f38a5fcbb664eff693c9b2b3a2c6ee2f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/f932c0f4f42b754487e5c9cfc83c344d575f4e": "153bde21c7a47c176d6a16c2fa3196d5",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/eb/358d86a7c4610eab7a3b5ea8540ce481d32cce": "22fd27991c140915fd8a1cc2d365751f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/cb6bf099909dcc63d113bcff718f79f25ba66a": "41eb9157b9be68e87460652ebe5f4916",
".git/objects/f7/0cd582c22f95241728d6942ea56c195925d102": "c1543827d296dae4b7e7b227fb6ddf62",
".git/objects/f8/b4888565caadc7510be75682268d6c18edd6de": "ebd33d8068a6e7bc2438646785c63225",
".git/objects/f9/70ee3dac0fe8ab28da76c2a9aa686ac3395c79": "bf25c464f02140eb61eb89f95514464e",
".git/refs/heads/main": "4ff4e8a1b4122769fd11390b8f922c74",
".git/refs/remotes/origin/main": "4ff4e8a1b4122769fd11390b8f922c74",
".vs/ProjectSettings.json": "e88a33ccaa92ae56561422612f557911",
".vs/slnx.sqlite": "734bd350dc9f53292f5c25f64dcb4c96",
".vs/VSWorkspaceState.json": "a5164d34cb7bc5d756503264cc04e609",
".vs/web/FileContentIndex/2e4cd66e-018b-428c-99e7-317b6102f2fb.vsidx": "9b99eb8a19b4e1c5a9c1c9d0e90e2ee1",
".vs/web/v17/DocumentLayout.json": "d415aedb692ddcf869efc7579cb302d8",
"assets/AssetManifest.bin": "764ed5d2a7356346642ea36ae34fb3b5",
"assets/AssetManifest.bin.json": "b726b636bbee145b53a0932f4ef32585",
"assets/AssetManifest.json": "1e26e2532ed6477ccf32675d6f9c6e1d",
"assets/assets/images/arrow_up.png": "e5c257891c95a1a983afb3950f0eb674",
"assets/assets/images/ball.png": "9e236a62994ddd27a44b4d4a325d50b6",
"assets/assets/images/block.png": "2d39dcc65f7bab4c6ad7aaa94860a32b",
"assets/assets/images/ember.png": "4dfe185b14556722bec4d4aefeb000b0",
"assets/assets/images/erdem.png": "999c104fd6779f7acad3077a7c24ebfd",
"assets/assets/images/football.png": "801369bbfeed71189e967c5690614d40",
"assets/assets/images/ground.png": "55ff488305e5543b99265bf46b3d3094",
"assets/assets/images/heart.png": "1ec544e61939a21e6fdc9038d356cdf4",
"assets/assets/images/heart_half.png": "946fe784a7d50a0f52b28378d4ea8f84",
"assets/assets/images/img.png": "8b1acc183513587d462010d6be5f0af5",
"assets/assets/images/Mario_ground.png": "f6c20ce8ba7f077495bdedf9961e54a1",
"assets/assets/images/mehmet.png": "5b2b4032dfd0957a615785642c5ba5a8",
"assets/assets/images/plane.png": "18673bb06d42265441048d1530d28768",
"assets/assets/images/star.png": "35b1abf4b0b34cce83027006f5fd9fea",
"assets/assets/images/water_enemy.png": "6702a02c0d411c023491e68a3a00ac0d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "d2532a74a9b98baa470d192bb9d44402",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7b1193027b56c437070eba501d4210bf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "be52f7e61f9868e6f859070e3e95bc38",
"/": "be52f7e61f9868e6f859070e3e95bc38",
"main.dart.js": "1d492feb3d0d26162d39605ed7c8416e",
"manifest.json": "113f43d66da042a9d84a111fe59e4a55",
"version.json": "95eeec94da020f5686eb1997fe8cefdb"};
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
