"use strict";
const fondoCel = document.getElementById("fondoCel");
const formChat = document.getElementById("formChat");
const inputTexto = document.getElementById("inputTexto");
const entrada = document.getElementById("idNav");


// window.addEventListener("beforeunload", (event)=> {
//     event.returnValue = '¿Está seguro que desea salir de la página?';
//     console.log("pasa?")
// })

if(navigator.serviceWorker){
    navigator.serviceWorker.register("swChat.js")
}

entrada.addEventListener("click",()=>{
    navigator.serviceWorker.ready.then(entrada=>entrada.active.postMessage("idchat"))
})

formChat.addEventListener("submit",event=>{
    event.preventDefault();
    const contenidoTexto = inputTexto.value;
    let mEnviado = document.createElement("div");
    fondoCel.appendChild(mEnviado);
    mEnviado.classList.add("mensajeChatEnviado");
    mEnviado.textContent = contenidoTexto;
    mEnviado.style.left = "-170px"
    let label = document.createElement("label");
    mEnviado.appendChild(label)
    label.classList.add("label");
    label.setAttribute("for",mEnviado);
    label.textContent = hora+":"+minuto
    navigator.serviceWorker.ready.then(resultado=>resultado.active.postMessage(contenidoTexto))
    //el ready necesario para que el service worker alcance a cargar. eso devuelve promesa, so then().
    //el argumento X da el ServiceWorkerRegistration. Active menciona que SW esta activo.
    //es este SW el que tiene el postMessage() activo, por lo que solo ahora se puede usar.
    inputTexto.value = ""
})


    navigator.serviceWorker.addEventListener("message",e=>{
        let mRecibido = document.createElement("div");
        fondoCel.appendChild(mRecibido);
        mRecibido.classList.add("mensajeChatRecibido");
        mRecibido.textContent = e.data;
        let label = document.createElement("label");
        mRecibido.appendChild(label)
        label.classList.add("label");
        label.setAttribute("for",mRecibido);
        label.textContent = hora+":"+minuto
})

let horario = new Date();
let hora = horario.getHours();
let minuto = horario.getMinutes();
console.log(hora+":"+minuto)