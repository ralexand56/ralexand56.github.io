"use strict";var precacheConfig=[["/IRS_Informagic_Home_React/index.html","9e9e7cad9a9aca93e5ed9ee33e574ae6"],["/IRS_Informagic_Home_React/static/css/main.9b24c3c1.css","4c12f11c620effb7c44574bd94a228af"],["/IRS_Informagic_Home_React/static/media/4.dd77cc9a.png","dd77cc9a389082233e62920ec8b28c40"],["/IRS_Informagic_Home_React/static/media/avatar_all.c5a509ac.png","c5a509acee8aab3a1f62e16ea1204ffc"],["/IRS_Informagic_Home_React/static/media/color.c7a33805.png","c7a33805ffda0d32bd2a9904c8b02750"],["/IRS_Informagic_Home_React/static/media/header-profile-skin-1.85efa900.png","85efa900c0fc12fee15a5398deba06e8"],["/IRS_Informagic_Home_React/static/media/header-profile-skin-2.8307c45c.png","8307c45ca34d4af71912b535b6c05c54"],["/IRS_Informagic_Home_React/static/media/header-profile-skin-3.bf471ec3.png","bf471ec3d4085883e061ca35006e86e8"],["/IRS_Informagic_Home_React/static/media/header_one.1faaad35.jpg","1faaad354c7843acb688e5c2b14e67ba"],["/IRS_Informagic_Home_React/static/media/header_two.f2f2de96.jpg","f2f2de96e14a40255e93ab5fab29916b"],["/IRS_Informagic_Home_React/static/media/line.567f5738.gif","567f57385ea3dde2c9aec797d07850d2"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-300.177cc92d.ttf","177cc92d2e8027712a8c1724abd272cd"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-300.27ef0b06.svg","27ef0b062b2e221df16f3bbd97c2dca8"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-300.521d17bc.woff","521d17bc9f3526c690e8ada6eee55bec"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-300.60c86674.woff2","60c866748ff15f5b347fdba64596b1b1"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-300.76b56857.eot","76b56857ebbae3a5a689f213feb11af0"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-700.148a6749.eot","148a6749baa5f658a45183ddb5ee159f"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-700.2e00b263.svg","2e00b2635b51ba336b4b67a5d0bc03c7"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-700.623e3205.woff","623e3205570002af47fc2b88f9335d19"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-700.7e08cc65.ttf","7e08cc656863d52bcb5cd34805ac605b"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-700.d08c09f2.woff2","d08c09f2f169f4a6edbcf8b8d1636cb4"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-regular.7aab4c13.svg","7aab4c13671282c90669eb6a10357e41"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-regular.9dce7f01.eot","9dce7f01715340861bdb57318e2f3fdc"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-regular.bf2d0783.woff","bf2d0783515b7d75c35bde69e01b3135"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-regular.c045b73d.ttf","c045b73d86803686f4cd1cc3f9ceba59"],["/IRS_Informagic_Home_React/static/media/open-sans-v15-latin-regular.cffb686d.woff2","cffb686d7d2f4682df8342bd4d276e09"],["/IRS_Informagic_Home_React/static/media/primeicons.578adf24.ttf","578adf2401b7fb04c6421c8520861b80"],["/IRS_Informagic_Home_React/static/media/primeicons.721cded7.svg","721cded7b825d0911a11316507999b3c"],["/IRS_Informagic_Home_React/static/media/primeicons.7b38afd8.woff","7b38afd805cafd98467660c35b541e7c"],["/IRS_Informagic_Home_React/static/media/primeicons.82643753.eot","826437530b3cf08b14cdf1d52618be9b"],["/IRS_Informagic_Home_React/static/media/shattered.ea231622.png","ea2316224d45899c59bc285ba09dd920"],["/IRS_Informagic_Home_React/static/media/word_map.925633f6.png","925633f6715929c667b2541eb7dad40e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/IRS_Informagic_Home_React/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});