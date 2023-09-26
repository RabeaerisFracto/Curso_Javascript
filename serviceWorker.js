let versionCache = "version 2.4"//modificacion de version de cache
let aCachear = [//array con elementos a cachear
    `index.html`,
    `1sttry.css`,
    `Codigo.js`
];
self.addEventListener("install",()=>{//instalacion del SW
    console.log("se instalo el service worker")
    caches.open(versionCache).then(cache=>{//crea o actualiza cache. Promesa
        cache.addAll(aCachear).then(res=>{//addAll xke es mas de 1 archivo
            console.log(`Info cacheada`)})
            .catch(e=>{console.log(e)})// es promesa, ergo va con catch
        })
    })

self.addEventListener("activate",()=>{//activacion de SW
    console.log("el SW se activó")
    caches.keys().then(key=>{//key de keys (promesa)
        return Promise.all(//promesa que pasa x todas las keys
            key.map(cache=>{//mapeo de cada key de cache
                if(cache !== versionCache){//si cada 1 de estos, es distinto a versionCache
                    console.log("outdated cache deleted")
                    return caches.delete(cache);//de los caches, borra cache
            }})
        ).catch(e=>{console.log(e)})//promesa, va con catch
    })
})

self.addEventListener("fetch",e=>{// para interceptar peticiones
    e.respondWith(//respondWith modula respuesta
        caches.match(e.request).then((respEnCache)=>{//se buscamatch en cache
            if(respEnCache){//si existe...
                return respEnCache;//se devuelve cache
            }else{//sino
                return fetch(e.request).then((response)=>{//se vuelve a hacer fetch de e.request
                    return response;//eso da un response, se retorna response.
                })}}))});

//IMPORTANTE: si esta activa la opcion de actualizar SW cuando se vuelva a cargar, tira error.
//pagina depende de mas de 3 archivos, que no estan en en cache.
// verificar libreria workBox}