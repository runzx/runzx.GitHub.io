/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "403-1.html",
    "revision": "d5132ab27796293093ad4264458ec7ab"
  },
  {
    "url": "404-1.html",
    "revision": "268c460c733cd968fe8e82edfa0996f4"
  },
  {
    "url": "500-1.html",
    "revision": "81de733aa905fdab5e8951d2a1566fdc"
  },
  {
    "url": "about.html",
    "revision": "b011e31d7119113cbc3e63262bbf056f"
  },
  {
    "url": "assets/css/0.styles.a56504de.css",
    "revision": "60466204e05cbbd7bfd980aec270d877"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d0fe15ee.js",
    "revision": "19caf82b6bace70251f97e00a2e9e54d"
  },
  {
    "url": "assets/js/11.10f964b7.js",
    "revision": "a8a0c2048e5672aecd1befc07621a111"
  },
  {
    "url": "assets/js/12.9f692495.js",
    "revision": "a19c903fabf2e8e4b1a938dc3b55e94f"
  },
  {
    "url": "assets/js/2.98f30d17.js",
    "revision": "5b285915b2d763a0c37d01e4f6525ba9"
  },
  {
    "url": "assets/js/3.5684b352.js",
    "revision": "c83da4158e2b4ff6682201fc022b9f1b"
  },
  {
    "url": "assets/js/4.d6de901b.js",
    "revision": "60a902e4606cdd5869d50ee71f3e6689"
  },
  {
    "url": "assets/js/5.8b42463c.js",
    "revision": "6f2eba87fce65419af4534f8fe621638"
  },
  {
    "url": "assets/js/6.e01fb5a0.js",
    "revision": "3f53e07a4684b5e8631a40b72a8600c9"
  },
  {
    "url": "assets/js/7.d0c9006f.js",
    "revision": "fc75b1c614ef52a7ee9c4d03c4f0ba32"
  },
  {
    "url": "assets/js/8.712d13fe.js",
    "revision": "53fc237af448cbfa7f55ad83f0675013"
  },
  {
    "url": "assets/js/9.d351bccc.js",
    "revision": "4e90aa8ce75ecfae69a2a0751fca0845"
  },
  {
    "url": "assets/js/app.c520abcc.js",
    "revision": "aebeae5db89332972674672672ce6f87"
  },
  {
    "url": "blog/index.html",
    "revision": "b74c4dffd48b665ef2434f99fd78856c"
  },
  {
    "url": "index.html",
    "revision": "607a60ca2bb98f0c69d4b3d2941043e8"
  },
  {
    "url": "logo-144x144.png",
    "revision": "dd4dac8ef09aa2349c3ecefd3bac99dd"
  },
  {
    "url": "logo-192x192.png",
    "revision": "2e22c1e98a77f9c2da47ffa7bca6630d"
  },
  {
    "url": "logo-512x512.png",
    "revision": "941a73b9b718917c0c68a054d9cd072f"
  },
  {
    "url": "logo.png",
    "revision": "f0ce1ecbd983f0760fe26ebb2f531e90"
  },
  {
    "url": "pwaDemo.html",
    "revision": "f386a18e960358b03679ca897222b996"
  },
  {
    "url": "works/index.html",
    "revision": "2718277b5160731918d3b603a211a63a"
  },
  {
    "url": "works/restapi.html",
    "revision": "8f377982fa9bcc2bddd49af6b68c9222"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
