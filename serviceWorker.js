self.addEventListener("install",()=>{
    console.log("se instalo el service worker")
})
self.addEventListener("activate",()=>{
    console.log("el SW se activó")
})
self.addEventListener("fetch",()=>{//verifica si se envia una solicitud a serviceWorker
    console.log("aqui para interceptar peticiones")
})
// verificar libreria workBox