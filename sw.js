// Nome do cache (controle de versão)
const cachePWA = 'cache-v1'
// Arquivos a serem armazenados em cache
// Todos os arquivos devem ser adicionados ao vetor (exceto o manifesto)
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/taro.js',  
  '/icon192.png',
  '/icon512.png',
  '/img/0-louco.jpg',
  '/img/1-mago.jpg',
  '/img/2-sacerdotisa.jpg',
  '/img/3-imperatriz.jpg',
  '/img/4-imperador.jpg',
  '/img/5-papa.jpg',
  '/img/6-enamorados.jpg',
  '/img/7-carro.jpg',
  '/img/8-forca.jpg',
  '/img/9-eremita.jpg',
  '/img/10-fortuna.jpg',
  '/img/11-justica.jpg',
  '/img/12-enforcado.jpg',
  '/img/13-morte.jpg',
  '/img/14-temperanca.jpg',
  '/img/15-diabo.jpg',
  '/img/16-torre.jpg',
  '/img/17-estrela.jpg',
  '/img/18-lua.jpg',
  '/img/19-sol.jpg',
  '/img/20-julgamento.jpg',
  '/img/21-mundo.jpg'
]

// Instalando o Service Worker e armazenando os arquivos no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cachePWA)
      .then((cache) => {
        return cache.addAll(urlsToCache)
      })
  )
})

// Interceptando as solicitações de rede e servindo arquivos do cache quando offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Se o arquivo está no cache, serve o arquivo do cache
        if (response) {
          return response
        }
        // Caso contrário, faz uma solicitação de rede
        return fetch(event.request)
      })
  )
})
