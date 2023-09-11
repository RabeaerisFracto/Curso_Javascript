self.addEventListener("install",()=>{
    console.log("se instalo el service worker")
})
self.addEventListener("activate",()=>{
    console.log("el SW se activó")
})
// self.addEventListener("fetch",()=>{//verifica si se envia una solicitud a serviceWorker
//     console.log("aqui para interceptar peticioness")
// })

self.addEventListener("message",e=>{
    console.log(e.data + " " + e.source.id);
    clients.matchAll().then(clientes=>{
        clientes.forEach(cliente => {
            console.log(cliente)
            if(cliente.id !== e.source.id){
                cliente.postMessage(e.data)
            }
        });
    })})
//solo para enviar y recibir mensaje y source.id