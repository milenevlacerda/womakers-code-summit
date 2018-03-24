var CACHE_NAME = "my-site-cache";

var urlsToCache = [
  "/", 
  "/css/main.css", 
  "img/womakerscode2.png"
];


/*
 * Adicionando arquivos ao cache toda vez que o service worker for instalado 
 */

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => {
      console.log('Instalado');
      return cache.addAll(urlsToCache)
    })
  )
});

/*
 * Interceptando carregamento de imagens do servidor para o cache storage 
 */

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});


/*
 * Atualizar para a versão mais recente quando o service worker for ativado 
 */

this.addEventListener("activate", event => {
  var cacheWhitelist = ["my-site-cache"];

  event.waitUntil(
    caches.keys().then(
      keyList => {
        return Promise.all(
          keyList.map( key => {
            if (cacheWhitelist.indexOf(key) === -1) {
              return caches.delete(key);
            }
          })
        );
     })
  );
});