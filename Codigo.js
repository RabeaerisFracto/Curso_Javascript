"use strict";

//VARIABLES (ultimo activo x chatGPT)
let objeto = prompt("que objeto usaras");
const nombres = {
    "celular": "Aaron",
    "animal": "Dominique"
  };
  Object.preventExtensions(nombres); // no permite añadir propiedades nuevas
  const respuestas = {
    "celular": "Bueno, veremos celulares<br>",
    "animal": "Ufff no quiero, que pena<br>"
  };
  Object.defineProperty(respuestas, `animal`,{value:"Uffffff, naaaaaa", writeable:false})
  //defineProperty: (nombre de variable, `propiedad`,{value:"valor", writeable:solo lectura boolean})
  function nombreFiltrado() {
    return nombres[objeto] || "Jaiva";
  }
  function respuestaFiltrada() {
    return respuestas[objeto] || "Lo siento, solo tenemos celulares<br>";
  }
//   function nombreFiltrado(objeto) {      usa mas recursos que if, y en frase nombreFiltrado(objeto)
//     switch (objeto) {
//       case "celular":
//         return "Aaron";
//         break;
//       case "animal":
//         return "Dominique";
//         break;
//       default:
//         return "Jaiva";
//     }
//   }
// let objeto = prompt("que objeto usaras");
// let nombre = ["Aaron","Dominique","Jaiva"];
// let respuesta = [" Bueno, veremos celulares<br>"," Ufff no quiero, que pena<br>"," Lo siento, solo tenemos celulares<br>"]
// function nombreFiltrado(){
//     if(objeto === "celular") return(nombre[0]);
//     else if(objeto === "animal") return(nombre[1]);
//     else; return(nombre[2])
// }
// function respuestaFiltrada(){
//     if(objeto === "celular") return(respuesta[0]);
//     else if(objeto === "animal") return(respuesta[1]);
//     else; return(respuesta[2])
// }
// let n = [0, 1, 2]
// function sujeto(){
//     if(objeto === "celular") return(n= 0);
//     else if(objeto === "animal") return(n= 1);
//     else(objeto !== "celular", "animal"); return(n= 2)
// }
const frase = `Hola ${nombreFiltrado()} esta es una prueba.`+ respuestaFiltrada();
document.write(frase)

//FUNCION
// function eleccionObjeto(){
//     if(objeto == "celular") {
//         document.write(" Bueno, veremos celulares<br>")
//         }
//         else if(objeto == "animal") {
//             document.write(" Ufff no quiero, que pena<br>")
//         }
//         else {
//         document.write(" Lo siento, solo tenemos celulares<br>")
//     } 
// }
// eleccionObjeto()
 
 //BUCLE Y LABEL
let i;
for( i = 1; i <8; i++ ){
    document.write( i + " ")
}

//OBJETOS, HERENCIA, GETTERS Y SETTERS
class animal {
    constructor(patas,embrion,ambiente,respiracion,piel){
        this._Patas = patas;
        this.tipoNacimiento = embrion;
        this.ecoSistema = ambiente;
        this.organoRespiratorio = respiracion;
        this.recubrimiento = piel;
        this.infoAnimal = `Soy un animal ${this._Patas} patas, y me desplazo por el ${this.ecoSistema}`+ "<br>";
    }
    get getPatas(){
        return this._Patas;
    }
    set setPatas(patas){
        this._Patas = patas;
    }
    rugido() {
        if(this.ecoSistema == "tierra"||"aire" && this.organoRespiratorio == "o2" ) {
            if(this._Patas == "de 4") return(document.write("Auuuuuu" + "<br>"))
                else if(this._Patas == "de 2" && this.recubrimiento == "cuero") return (document.write("Noooooooo" + "<br>"))
                else{return(document.write("Groaaaaar" + "<br>"))}
        }
        else{document.write("Este animal no puede rugir" + "<br>")}
    }
    verInfo() {
        document.write(this.infoAnimal)
    }
}
class Humano extends animal {
    constructor(patas,embrion,ambiente,respiracion,piel,comunicacion){
        super(patas,embrion,ambiente,respiracion,piel);
        this._lenguaje = comunicacion;
    } 
    get getLenguaje(){                      //get getNombre
        return this._lenguaje;             //retorna this.valor
    }    
    set setLenguaje(comunicacion){         //set setNombre(contructor/nombre valor, como argumento)
        this._lenguaje = comunicacion;     //this.valor = nombre constructor    --------> A LINEA 126
    }
    hablar() {
        document.write(`Soy humano y hablo ${this._lenguaje}` + "<br>")
    }    
}

let lobo = new animal("de 4","viviparo","tierra","o2","cuero");
let halcon = new animal("de 2","oviparo","aire","o2","plumas");
let tiburon = new animal("sin","oviparo","agua","h2o","escamas");
let anaconda = new animal("sin","oviparo","tierra","o2","escamas");
let pinguino = new animal("de 2","oviparo","agua","o2","plumas");
let hombre = new Humano("de 2","viviparo","tierra","o2","cuero","frances")

halcon.setPatas = "de 4"                   
halcon.rugido();
tiburon.rugido();
pinguino.verInfo();
hombre.setLenguaje = "cualquier otra wea";   //objeto.setNombre = "nuevo nombre de valor"
hombre.hablar();
hombre.verInfo();
console.log(animal);


// TRY,TROW, CATCH, Y FINALLY
try{
    halcon.fijarOpcion(); //se debe ejecutar la funcion.
}
catch(error){
    console.log("funcion no valida"); //ausencia de cadena da mensaje default pero no es mensaje tipo error.
    // throw {                            //throw, por alguna razon, evita que se exprese mas codigo una vez desencadenado. ATENTO A ESTO
    //     nombreError: "errorQl",
    //     tipoError: "errorMula",
    //     opciones: "ni1"
    // }
}
finally{
    console.log("Finally, aparece de igual manera este o no presente el error. Puede cerrar bases de datos.")
}


//METODOS DE CADENAS

let cad1 = "This series definitely deserves a remaster.";
let cad2 = " There are few games that do.";
let cad3 = " But the gameplay and mechanics in this game make it one of a kind.";
let cad4 = " now it looks visually modern again!";

let ras1 = "Th";
let ras2 = ".";


let ena1 = cad1.concat(cad2,cad3,cad4);
let ena2 = ena1.startsWith(ras1);
let ena3 = ena1.endsWith(ras2)
let ena4 = ena1.includes(ras1)
let ena5 = ena1.indexOf("in")
let ena6 = ena1.lastIndexOf("in")

document.write("<br>"+ena1+"<br>"+ena2+"<br>"+ena3+"<br>"+ena4+"<br>"+ena5+" "+ena6+"<br>");

let rell1 = ras1.padStart(5,ras2) + " " + ras1.padEnd(5,ras2) + " " + ras1.repeat(5);

document.write("<br>"+rell1+"<br>");

let mod1 = ena1.split(".");
document.write(mod1[2] + "<br>" + "<br>" + "<br>");

//METODOS DE ARRAYS

let mod2 = mod1.pop();mod1.shift(),mod1.reverse(),mod1.push(". That's it."),mod1.unshift("Number1","number2","number3","number4"),mod1.splice(1,3,"LetterA","LetterB","letterC");

document.write(mod1);

let mod3 = mod1.join("##");

document.write("<br>" + mod3);

let mod4 = mod1.slice(2,6);

document.write("<br>" + mod4);

mod1.forEach(x => {
    return(document.write("<br>" + x.slice(0,2) + x.charAt(2).toUpperCase() + x.slice(3)))
}); //slice para cortar frase hasta posicion de charAt, luego resto de frase con slice desde 1+ de charAt

let marcas = ["PlayStation","Razer","Ryzen","Edifier","LG","HP","Sapphire","Ryzen","Asus","Ryzen"];
// function cincoLet(desk){
//     return (desk.length > 4);
// }

let marcasFiltradas = marcas.filter(x => x.length > 4);

let marcasRepetidas = {};         //variable vacia para trabajar, debe ser entre {} no entre []

for(let marca of marcas){        //pasar a traves de cada variable en el array
    if(marcasRepetidas[marca]){  //TRICKY PART: si en marcasRepetidas NO esta la marca, se le da un valor de 1 (else),
    marcasRepetidas[marca]++;    //pero si YA ESTA, la marca x la ke ya esta pasando el bucle, aumenta en 1(++)
    } else {
    marcasRepetidas[marca] = 1;
    }
}

console.log(marcasRepetidas);

document.write(marcasFiltradas);



let vals = [5,4,9,2,1];

vals = vals.filter(x => x % 2 != 0);
document.write(vals);


// OBJETO MATH: METODOS Y PROPIEDADES

let objMath = (Math.sqrt(25) + Math.cbrt(27)) - (Math.max(1,3,5) - Math.min(1,3,5))
document.write(objMath);
let objMath2 = Math.round(Math.random()*10) - Math.floor(1.8) * Math.trunc(1.98565564687987)
document.write(objMath2 + "<br>");


// DOM

function pruebaOnload(){
    const titulo = document.getElementById("parrafo");
    titulo.setAttribute("contentEditable","true");
    titulo.setAttribute("title","prueba titulo")
    titulo.style.color = "#5bb"
    titulo.style.backgroundColor = "#d99"
    titulo.style.padding = "15px"
    console.log(titulo.innerText)
    console.log(titulo.innerHTML)
    console.log(titulo.outerHTML)

    // titulo.setAttribute("dir","rtl")
    // titulo.setAttribute("hidden","true")
}
function pruebaOnload2(){
    const buscador = document.querySelector(".elTypeChange");
    buscador.type = "password"
    // buscador.setAttribute("minlength","4")
    buscador.minLength = 5  //funciona con camelCase. setAttribute tiene preferencia.
    buscador.placeholder = "cambio PH"
    buscador.required = "true"
}
function pruebaOnload3(){
    const enviarConsulta = document.getElementById("send1");
    enviarConsulta.getAttribute("form", "formul")
}
window.onload = function(){
    pruebaOnload()
    pruebaOnload2()
    pruebaOnload3()
    // const pruebaInput = document.getElementById("#typeChange");
    // document.write(pruebaInput)
    // pruebaInput.setAttribute("hidden","true")
};

//OBTENCION Y MOD DE ELEMENTOS

const Body = document.querySelector("#formul");
const itemBody = document.createElement("P");
let textItemBody = document.createTextNode("Texto de elemento creado en body x JS");
itemBody.innerHTML = "modificacion con innerHTML"
Body.appendChild(itemBody);
itemBody.appendChild(textItemBody);

let pruebaFragmento = document.createDocumentFragment();
for (i = 0; i <= 5; i++) {
    const listForFragment = document.createElement("LI")
    listForFragment.innerHTML = `prueba en lista de fragmento ` + i
    pruebaFragmento.appendChild(listForFragment)
};
itemBody.appendChild(pruebaFragmento);

// CONSOLA
console.time();
console.groupCollapsed("prueba");
console.assert(5<2); //si FALSE sale error en consola, si TRUE no pasa nada.
console.table(marcas);
console.log();
console.timeEnd();
console.groupEnd();

// WINDOW

let YTpage = "http://youtube.com";
let abrirYT = window.open(YTpage);
abrirYT.close();
abrirYT.closed; //verifica si esta o no cerrada la ventana
abrirYT.stop();//cancela carga de ventana
//window.alert("wena po");// este puede ir sin "window." antes
//window.print();
//window.prompt("escribe algo");//retorna cadena

const screen = window.screen;
console.log(screen);
const screenLeft = window.screenLeft;
const screenTop = window.screenTop;
console.log(screenLeft,screenTop)

const windowLocation = window.location.href + " " + window.location.hostname + " " + window.location.pathname + " " + window.location.protocol;
//window.location.assign("https://youtube.com")

document.write(windowLocation);


// EVENTOS

const botonJs = document.querySelector(".botonEvento");
const botonYT = document.querySelector("#botonYoutube");
let botonRSize = document.querySelector("#botonResize");
let selectPrueba = document.querySelector("#selectPrueba");
let textoFijo = document.querySelector("#opcionSeleccionada");

// botonJs.addEventListener("click",(e)=>{
//     alert("prueba boton") //primero evento, despues funcion
//     console.log(e)
// });
botonJs.addEventListener("click",removeList,true) //true, le da preferencia a ejecucion por sobre bubbling
function removeList (evt){
    alert("prueba boton");
    botonJs.removeEventListener("click",removeList);//remover listener no puede ser con funcion flecha
    console.log(evt.target) //se debe ejecutar el evento antes de verlo en consola
    evt.stopPropagation() //evita que otros event listener padres se activen.
}
function botonYoutube2 (){
    if (window.confirm("esta por salir de la pagina, desea continuar?")){
        return (window.open(YTpage))
    }
        else {alert("se ha mantenido en la pagina")
        }
}
botonYT.addEventListener("dblclick",botonYoutube2)
function abrirYoutube (){
    if (window.confirm("esta por salir de la pagina, desea continuar?")){
        return (window.open(YTpage))}
        else {
        }
} //esto sirve en firefox como advertencia antes de salir del sitio.

window.addEventListener("beforeunload", (event)=> {
    event.preventDefault(); //previene mensaje default
    event.returnValue = '¿Está seguro que desea salir de la página?';
});// en firefox modificacion del mensaje esta descativado.

function resizeScreen(){
    if (screen.width > 800){
        window.resizeTo(800,600)
    }
    else {
        window.resizeTo(1240,480)
    }
}
botonRsize.addEventListener("click",resizeScreen)
addEventListener("resize",()=>{
    alert("se ha cambiado el tamaño de la pantalla")
}) //solo funciona en ventana abierta por script.......... -____-
const elBuscador = document.querySelector(".elTypeChange");
const contenedor = document.querySelector(".seleccion");
elBuscador.addEventListener("select",(evt)=>{
    console.log(evt);
    let inicioSeleccion = evt.target.selectionStart;
    let terminoSeleccion = evt.target.selectionEnd;
    let totalEscrito = elBuscador.value;
    contenedor.textContent = totalEscrito.substring(inicioSeleccion,terminoSeleccion);
})// target y otras propiedades se puede acceder por consola, revisando console.log(evt)

function fijarOpcion(){
    let valorSeleccionado = selectPrueba.value;
    let textoSeleccionado = selectPrueba.options[selectPrueba.selectedIndex].text;
    selectPrueba.value = valorSeleccionado
    selectPrueba.text = textoSeleccionado
    selectPrueba.style.display = `none`
    textoFijo.innerText = textoSeleccionado
}
botonRsize.addEventListener("click",fijarOpcion);
//Hay un span vacio, que se puede modificar con innerText. Desaparece selectPrueba
//con style.display (opcion entre comillas). Necesario ingresar ID o clases como objetos.
//atento a selectedIndex en textoSeleccionado, y rematar con .text
//debe estar SIEMPRE value Y text.

const intervalo = (setInterval(function inputValue(){
    elBuscador.value = "hola";
    },2000)// si lo borras se escribe nuevamente
)
setTimeout(()=>{
    clearInterval(intervalo);
},7000); //despues de 7 segs, ya se deja de escribir.


// CALLBACK

//Funcion donde uno de sus parametros es otra funcion. Recordar utilizarla dentro de la misma funcion donde se esta ejecutando el CB.
function pruebaCallback(anotacion,cb){
    setTimeout(()=>{
        console.log(anotacion);
        cb(); //se necesita funcion dentro de setTimeout para demorarla.
    },2000)
}
function pruebaCallback2(){
    console.log("mensaje 2");
}
pruebaCallback("hola",pruebaCallback2);


//   PROMESAS
let variablePromesa = (id)=>{                                  //Se crea variable con funcion flecha, argumento opcional.
    return new Promise ((resolve,reject)=>{                    //Se retorna promesa
        let largoMarcas = marcas[id].length <= 5;              //nueva variable con operacion
        if (largoMarcas === true){                             //condcional, cuya respuesta es resolve o reject
            resolve(`Promesa Resuelta`);                       //En() mensaje, variable, u objeto
        } else {
            reject(`Promesa Rota`);
}})}
// for (i= 0;i<marcas.length;i++){          //probar forEach?
//     variablePromesa(i).then((respPromesa)=>{                      //1era Variable.then((argumentoX)=>{Accion a tomar con argumentoX})
//         console.log(`esto seria una  `+ respPromesa)
//     }).catch((respPromesa)=>{                                  //}.catch((argumentoX)=>{Accion a tomar con argumentoX})
//         console.log(`esto es una `+ respPromesa)
//     })};





//    ASYNC AWAIT

async function promAsync(){                                       //async siempre antes de LA funcion
    try{                                                          //try para poder poner un catch que agarre el reject
        for (i= 0;i<marcas.length;i++){                           //for para cambiar la variable i automaticamente, pero al ser await se detiene en la 1era.
            const respPromesa = await variablePromesa(i)          //var argumentoX = await variable de promesa()
                console.log(`esto seria una  `+ respPromesa)
}}catch(err){
    console.log(`esto es una `+ err)
}}

promAsync();


let nuevaPromesa = ()=>{
    return new Promise ((resolve,reject)=>{               //Importa el orden de resolve y reject
        let parImpar = Math.round(Math.random()*200)
        if(parImpar % 2 == 0){
            let sentenciaPar = parImpar
            resolve(sentenciaPar)
        }else {
            reject("numero Impar " + parImpar)
        }})}

// nuevaPromesa().then((x)=>{
//     console.log("instruccion 1 de promesa 2 antes del return resolve")
//     return new Promise ((resolve)=>{
//         resolve ("el numero entregado es un " + x)
//     })}).then((resultadoPromesa) => {
//         return new Promise((resolve)=>{
//             resolve(resultadoPromesa + " y 12345")
//     })}).then((resultadoPromesa2)=>{
//         console.log(resultadoPromesa2)
//     }).catch((err)=>{
//     console.log("instruccion 1 de promesa 2 antes del return reject")
//     return console.log("el numero entregado es un " + err)
// })
//para usar un segundo .then() es necesario retornar una nueva promesa en cada then() y cerrar hasta
//el ultimo () del 1er then(), que seria el que esta junto a la var.
//el ultimo siempre va a ser el catch((err)) del reject, que debe venir con un retorno.



const varAsync = async ()=>{
    try{
        let resultadoPromesa = await nuevaPromesa()
        let resultadoPromesa2 = await resultadoPromesa
        console.log(resultadoPromesa2)
    }catch(err){
            console.log(`esto es una `+ err)
    }}
// disminuí los .then y console.log para verificar lo corto del proceso y el retorno como resolve.
varAsync();
varAsync();
varAsync();

// con for() se pueden repetir los varAsync(), y se pueden dar en orden con await.


//   FETCH, API, BLOB Y JSON 

fetch(`https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json`)
    .then(res=>{
        if(res.ok) {                                          //Lineas para comprobar si se cargo json correctamente
            console.log("carga de aves realizada")            //cualquier mensaje antes del return
            return res.json()}                                //necesario return para transformar json de esta manera, si solo es una linea no es necesario.
        else {console.log("carga de archivo incompleta")}})   //mensaje para confirmar carga fallida
    .then(data=> console.table(data.birds[1].members))          
    .catch("ave no encontrada")

//en [], se busca palabra separada x punto. En {}, se busca posicion entre [].
const pngPika = document.getElementById("imgpika");    //creacion con anterioridad de <img> vacia, para posterior modificacion.

fetch(`https://pokeapi.co/api/v2/pokemon/25/`)
.then(pokeX=>{
    if(pokeX.ok) { 
        console.log("pokemon cargado") 
        return pokeX.json()}  
    else {console.log("pokemon no salio de terminal")}}) 
.then(pika=>{                     //Aparte del console.log, puedo modificar o crear un <img> en document para modificarlo.
    console.log(pika)
    pngPika.src = pika.sprites.front_shiny   //seleccion de la propiedad del array
    pngPika.style.height = `5%`              //modificacion con style
    pngPika.style.width = `5%`})
.catch("error")

const Golem = document.createElement(`img`)     //Creacion de elemento mediante JS
Golem.style.float = "left"
Golem.style.width = "100px"
Golem.style.border = "2px dashed black"
fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png`)
.then(pokeX => pokeX.blob())                   //En ves de .json(), .blob()
.then(imgCla=> Golem.src = URL.createObjectURL(imgCla))  //URL.createObjectURL se usa para evitar confusiones. Nueva const.src = ~(Att)
.then(()=>document.body.appendChild(Golem))  //asignar en nuevo hijo con appendChild(Const)
.catch(error=> console.log(error))

let fecha = new Date
document.write(fecha.getFullYear()); //tb esta:get~(Date,Day,Month,Year,Hour,etc)
//getFullYear es getYear+1970.

// GET Y POST (GPT)

const form = document.querySelector('#myForm');  //selector de formulario

// form.addEventListener('submit', (e) => {         //el event es el boton submit, aplicar al form(selector de formulario)
//   e.preventDefault(); // previene el comportamiento predeterminado del formulario.
//   //Al llamar a preventDefault(), se detiene la acción predeterminada del formulario, lo que significa que los
//   //datos del formulario no se enviarán de inmediato y se puede usar JavaScript para procesar los datos del
//   //formulario de una manera personalizada.

//   const formData = new FormData(form); // crea un objeto FormData con los valores del formulario
//                                        //nueva K es igual a objeto nuevo FormData(K de selector)
//   fetch('https://example.com/api/submit', {   //Aqui va la pagina a la ke se envia la info. esta en "action" en form html
//     method: 'POST',                     //metodo post, si es get, no se pone nada xke esta x default
//     body: formData,                     //aki se agrega la info mas delicada, que se quiere enviar al servidor
//     // headers: {"Content-Type" : "aplication/json"}   //Con form data no es necesario esto, como tp stringyfy() el body
//   })
//   .then(response => {
//     if (response.ok) {
//       alert('Formulario enviado con éxito');
//       form.reset();                    // resetea el formulario
//     } else {
//       alert('Ocurrió un error al enviar el formulario');
//     }
//   })
//   .catch(error => {
//     alert('Ocurrió un error al enviar el formulario');
//     console.error(error);
//   });
// });
// Cuando se envía una petición con FormData, los datos se envían en el formato "multipart/form-data",
//que es un formato estándar para el envío de archivos y datos binarios en una solicitud HTTP
//no es necesario agregar un encabezado (header) adicional, ya que el navegador establece automáticamente
//un encabezado 'Content-Type' para la solicitud fetch() cuando se usa FormData(). El valor de Content-Type
//es "multipart/form-data", que es el tipo de contenido predeterminado para enviar datos de formulario con
//un método POST.

//      OPERADOR TERNARIO Y SPREAD

let pruebaTernario = Math.round(Math.random()*10);
(pruebaTernario % 2 === 0) ? console.log("el numero es par") : console.log("el numero es impar"); //(condicion) ? accion si true : accion si false;
let marcas2 = ["DC","Steam","Mozilla","Microsoft","Sony"];
console.log(marcas); //Aparece como array
console.log(...marcas2, ...marcas); //Aparece como string, y tambien sirve para concatenar arrays sin modificar array original.

function sumatoria1 (...numeros) {
    let resultadoSumatoria1 = 0
    for(let i=0;i<numeros.length;i++) {
        resultadoSumatoria1 += numeros[i]
    }
    return resultadoSumatoria1;
}
console.log(sumatoria1(1,3,5));// la sumatoria puede tener un array, y para descomponer los argumentos, se puede usar (...array).
//En este caso, en vez de tener sumatoria1(array[0],array[1],array[3]), solo se usa sumatoria1(...array).

//         DRAG & DROP

const cuadroPlomo = document.querySelector(".zonaDropeo");
const cuadroRojo = document.querySelector(".objetoDropeo");
const cargaExterna = ae => {   //intento de fileReader con Drag&Drop, se explica mas abajo
    const reader3 = new FileReader();
    reader3.readAsText(ae);
    reader3.addEventListener("load", e=>{
        cuadroPlomo.textContent = e.currentTarget.result
    })
}
cuadroRojo.addEventListener("dragstart",(e)=> {
    console.log(1)
    cuadroRojo.classList.add("seleccionado")
    const contenidoCuadroRojo = cuadroRojo.textContent;
    e.dataTransfer.setData("text/plain",contenidoCuadroRojo);
});
cuadroRojo.addEventListener("drag",()=> {console.log(2)});
cuadroRojo.addEventListener("dragend",()=> {
    console.log(3)
    cuadroRojo.classList.remove("seleccionado")
});
cuadroPlomo.addEventListener("dragover",(e)=>{
    e.preventDefault();
    cuadroPlomo.classList.add("seleccionado")
})
cuadroPlomo.addEventListener("dragleave",(e)=>{
    e.preventDefault();                         // se usa preventDefault() para evitar salida forzosa de zona
    cuadroPlomo.classList.remove("seleccionado")
})
cuadroPlomo.addEventListener("drop",(e)=>{
    console.log(4);
    const contenidoCuadroPlomo = e.dataTransfer.getData("text/plain");
    cuadroPlomo.textContent = contenidoCuadroPlomo;
    e.preventDefault();
    cargaExterna(e.dataTransfer.files[0])
})

//     const infoCuadroRojo = cuadroRojo.textContent;
//     e.dataTransfer.setData("text/plain",infoCuadroRojo)});
// cuadroRojo.addEventListener("drag",()=>console.log("drag"));
// cuadroPlomo.addEventListener("drop", (e)=> {
//     const infoTransferida = e.dataTransfer.getData("text/plain");
//     cuadroPlomo.textContent = infoTransferida;
// });

//         API GEOLOCALIZACION
const options = { //Options se debe declarar antes de llamar getCurrentPosition
    enableHighAccuracy: true,  //Maxima Presicion
    maximumAge: 0, //cuanto debe esperar para solicitar actualizar la info
    timeout: 5000 //cuanto tiempo de tardanza para retornar valores, en milisegundos
}

navigator.geolocation.getCurrentPosition((pos)=>{   //cada funcion flecha es un parametro, mas options
    const posicionActual = pos;
    console.log(`tu posicion actual es latitud ${posicionActual.coords.latitude} y longitud ${posicionActual.coords.longitude}`);
    console.log(posicionActual)},
    (error)=>{
        console.log(error.message + ":   no se pudo obtener la ubicacion")},
    options
); //aparte de getCurrentPosition(), tb tenemos watchPosition(), que usa los mismos parametros,
// se actualiza cada vez que detecta movimiento


//       FILE READER
let lector = document.getElementById(`lector`); //selecciono input "vacio" type="file"
let fral = document.querySelector(`.fral`);
let observador = document.getElementById(`observador`); // lector y observador son los inputs
let previewImagen = document.getElementById(`previewImg`); // los demas son el lienzo
let previewTexto = document.getElementById(`previewFile`);



lector.addEventListener("change",()=>{  //listener "change"
    let archivo = lector.files[0]
    if(archivo.type.startsWith(`image/`)){
        leerImg(archivo)}
    else if(archivo.type === `text/plain`){
        leerTxt(lector.files[0])};   //f(x) que va definida abajo
})
// observador.addEventListener("change",()=>{  //listener "change"
//     leerImg(observador.files[0]);
// })
const leerTxt = (txt) => {           // f(x) usada en listener change
    const reader = new FileReader(); //nuevo fileReader en forma de K
    const previewTexto = document.createElement(`textarea`);
    previewTexto.setAttribute(`id`,`previewFile`);
    fral.appendChild(previewTexto);
    reader.readAsText(txt);          //en reader puede ser tb: .readAsDataURL
    reader.onload = (e)=>{           //para hacerlo una vez cargue lo examinado.
        const contenidoPreviewText = e.target.result;
        previewTexto.value = contenidoPreviewText   //Valor del cuadro de texto
        previewTexto.style.display = "inline-block" // en css default como display none
    }                                               //Aparece solo al seleccionar archivo
}


const leerImg = (img) => {           // f(x) usada en listener change
    const reader2 = new FileReader(); //nuevo fileReader en forma de K
    const previewImagen = document.createElement(`img`);  //se crea elemento donde se mostrará preview
    previewImagen.setAttribute(`id`,`previewImg`);        // se le da id
    fral.appendChild(previewImagen);                      //Nuevo elemento se adjunta a grupo mas grande
    reader2.readAsDataURL(img);          //en reader puede ser tb: .readAsDataURL
    reader2.onload = (e)=>{
        const contenidoPreviewImg = e.target.result;
        previewImagen.setAttribute(`src`,contenidoPreviewImg)  // .value x .setAttribute(`src`, nombreKDeResult)
        previewImagen.style.display = "inline-block"
    }
}

//                IndexedDB

const peticionDB = indexedDB.open("DBPrueba2",1); //esta K no es la DB, es la peticion para crear una.("nombre",version)
peticionDB.addEventListener("upgradeneeded",()=>{ //la peticion puede generar evt success, error, o upgradneeded
    const laDB = peticionDB.result; //K ahora si representa a la base de datos, x ser resultado de peticion.
    laDB.createObjectStore("nombreChukos",{ //creamos OS("nombredeOS",{opciones})
        autoIncrement: true  //sirve para que index aumente cada vez ke le vayamos agregando data
    })
})
const añadirData = (data) =>{
    const laDB = peticionDB.result;  //se vuelve a especificar nombre de DB
    const transaccion = laDB.transaction("nombreChukos","readwrite"); //transaccion toma DB.transaction("nombre OS",
    //"puede ser readonly, readwrite, o versionchange")
    const almacen = transaccion.objectStore("nombreChukos"); //el OS sera la transaccion.objectStore("nombre de OS",claveOpcional)
    almacen.add(data); //el parametro sera el agregado en añadirData. PUT tb sirve en caso de actualizar data
    transaccion.addEventListener("complete",()=>{
        console.log(`Añadido correctamente a ${almacen.name}` )
    })
}
const formularioAnterior = document.getElementById("formul2");
formularioAnterior.addEventListener("submit",evt =>{
        evt.preventDefault();
        const valorChuko = document.getElementById("typeChange2").value;
        if (valorChuko.trim() !== ''){
            añadirData({nombre:valorChuko})};
    })
const botonChuko = document.getElementById(`botonChuko`);
botonChuko.addEventListener(`click`,()=>{
try{    // este try es para capturar error que se da al cancelar el prompt.
    let nombreAIngresar = prompt(`ingresa el nombre del chuko`);
    if (nombreAIngresar.trim() !== ``){
        añadirData({ nombre: nombreAIngresar });
        alert(`agregado correctamente`)
    }}catch{
    alert(`no se han ingresado datos`);
}})
const getIDBData = modo =>{ // Como esta parte se repite simepre, podemos hacer una funcion para acortarla.
    const laDB = peticionDB.result;
    const transaccion = laDB.transaction("nombreChukos",modo); 
    const almacen = transaccion.objectStore("nombreChukos");
    return [almacen,transaccion,laDB]; //recordar orden de corchetes
}
const leerData = ()=>{
    const IDBData = getIDBData("readonly");
    IDBData[0];
    IDBData[1];
    // const laDB = peticionDB.result;
    // const transaccion = laDB.transaction ("nombreChukos","readonly");
    // const almacen = transaccion.objectStore("nombreChukos");
    const cursor = IDBData[0].openCursor(); //diferencia radica aqui
    cursor.addEventListener("success",()=>{  //eventListener u onsuccess
        if(cursor.result){                   //cursor por si solo es una peticion, debe trabajarse con .result
            console.log(cursor.result.value);//y lo que se debe mostrar es el valor de este result
            cursor.result.continue();        // sin esto solo se muestra el primero
        } else console.log("todos los datos leidos");// eventualmente se queda sin datos, x lo ke si o si va a llegar al else.
    })
    IDBData[2].close(); // se cierra DB para ahorrar recursos.
}
const eliminarData = (key) =>{
    const IDBData = getIDBData("readonly");
    // const laDB = peticionDB.result;  
    // const transaccion = laDB.transaction("nombreChukos","readwrite");
    // const almacen = transaccion.objectStore("nombreChukos");
    IDBData[0].delete(key); //Posicion 0 de array = almacen
    IDBData[1].addEventListener("complete",()=>{ //posicion 1 de array = transaccion.
        console.log(`Eliminado correctamente de ${IDBData[0].name}`) //Cuidado con mantener objeto en `${}`
    })
}

//       MATCHMEDIA()

const comprobarOrientacion = window.matchMedia('(orientation: portrait)');
function mensajeOrientacion(evt) {
    if(evt.matches){
        alert(`ya no estas en landscape`)
    }else{alert(`volviste a landscape`)}
}
comprobarOrientacion.addListener(mensajeOrientacion);
//creas una K con matchMedia(), no es necesario "window.". Requisito en parametro es (`()`)
//para desencadenar simepre el efecto, debe ser un un addListener, sino solo sera una vez.

//             INTERSECTION OBSERVER
const urls = [`https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json`,`https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_north_america.json`]
const contenedorAves = document.getElementById("contenedorAves");  //seleccion de div gran HTML contenedor de posts
let contador = 0;
const newMsgBirds = (dataAves) =>{
    if(!dataAves){return null}; //para catch promesa rota
    const contenedorListaAves = document.createElement("DIV"); //contenedor de cada post (padre)
    const familiaAves = document.createElement("H3");  //titulo post (hijo)
    const listaAves = document.createElement("p");     //cuerpo post (hijo)

    contenedorListaAves.classList.add("contenedorListaAves");  //se añaden clases
    familiaAves.classList.add("familiaAves");  
    listaAves.classList.add("listaAves");
    contenedorListaAves.appendChild(familiaAves);//se designan hijos a padre
    contenedorListaAves.appendChild(listaAves);
    const contenedorAves = document.getElementById("contenedorAves");  //seleccion de div gran HTML contenedor de posts
    contenedorAves.appendChild(contenedorListaAves); //se asigna como padre de padre

    familiaAves.textContent = dataAves.family;  //contenido del titulo en parametro
    listaAves.textContent = dataAves.members; // lo mismo en contenido
    
    return contenedorListaAves
}
const cargarPublicaciones = async (num) => {
        const request = await fetch(urls[0]);
        const content = await request.json();
        let dataAves = content.birds;//acceso a array en json
        const documentFragment = document.createDocumentFragment();//docfragment para ahorrar recursos
        for (let j = 0; j < num; j++) {//j x i en for en caso de uso de otro for con i
            const contenedorListaAves = newMsgBirds(dataAves[contador])//otra k mismo nombre, [] variando desde afuera de funcion, sino, se resetea cada vez que se usa
            if(!contenedorListaAves){return null};//para catch elemento inexistente
            documentFragment.appendChild(contenedorListaAves);//cada cLA queda en un fragment.
            contador++;//se va sumando a let de afuera, asi mantiene numero independiente de cuanto se use la funcion actual.
            interObservador.observe(contenedorListaAves)}
        contenedorAves.appendChild(documentFragment)
}
const interObservador = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {entrada.target.classList.toggle("mostrar", entrada.isIntersecting)
    if (entrada.isIntersecting && entrada.target === contenedorAves.lastElementChild) {
        cargarPublicaciones(1);//cargas de mas de 1 toma error y no carga ultimo elemento de json
        }})})//con catch se dispara un contador++ extra con un cLA vacio.
cargarPublicaciones (5);//se puede mantener recarga de publicaciones a 1, con uso de un rootMargin positivo.



const containerNewBoxes = document.getElementById("containerNewBoxes");//contenedor vacio
let totalCajas = 0;//contador de cajas
const createNewBoxes = ()=>{
    for(i=0;i<1;i++){//de a cuanto se crean las cajas
        const newBox = document.createElement("div");
        newBox.classList.add("newBoxStyle");
        containerNewBoxes.appendChild(newBox);
        newBox.textContent = "new box " + (totalCajas+1)//parte del contador, abajo suma 1
        totalCajas++;
        lastDivObserved.observe(newBox);//los 2 observadores, este para verificar ultimo elemento cargado
        simpleObserver.observe(newBox);//este pata toggle mostrar/no-mostrar
}}
const lastDivObserved = new IntersectionObserver(entradas=>{
    const ultimoDiv = entradas[0];//solo hay un elemento x linea 848, el last-child
    if(!ultimoDiv.isIntersecting) return
    createNewBoxes();//creacion de cajas
    lastDivObserved.unobserve(ultimoDiv.target);//desobservar xke last-child observado ya no sera realmente last-child
    lastDivObserved.observe(document.querySelector(".newBoxStyle:last-child"))//observar last-child
})
const simpleObserver = new IntersectionObserver((entradas)=>{
    entradas.forEach(entrada=>{
        entrada.target.classList.toggle("mostrar",entrada.isIntersecting);
        entrada.target.classList.toggle("no-mostrar",!entrada.isIntersecting);
        })
},{rootMargin:"-100px 0px -130px"})//fuerza margin distinto a div
createNewBoxes()


//             VISIBILITYCHANGE Y NOTIFICATIONS

addEventListener("visibilitychange",e=>{
    if(e.target.visibilityState == "visible") { //otra opcion es hidden
        alert("puede usarse para pausar videos cuando se cambia de pestaña")
    }
})

Notification.requestPermission(()=>{// dara default, granted o denied
    if(Notification.permission == "granted"){
        new Notification("notificacion aca")
    }
}); 
//

//               WEB WORKERS & MEMOIZER

let worker = new Worker(`elworker.js`);//crear worker seleccionando .js ya creado.
let divWorker = document.getElementById(`resultadoOperacion`);
let botonWorker = document.getElementById(`botonWorker`);
botonWorker.addEventListener("click",(event)=>{//event puede ser usado para evitar propagacion
    //o tambien para preventDefault()
    worker.postMessage(`mensaje o argumento hacia el worker`);//util para trasásar un argumento al worker
    worker.onmessage = function(message){//recepcion de info desde worker
        divWorker.textContent = message.data;//se retorna message, datos usualmente almacenados en .data
        worker.terminate();//sin esto operacion se sigue ejecutando. Posible para encontrar valor
    }
})

let formul3 = document.getElementById(`formul3`);
let inputWorker = document.getElementById(`inputWorker`);
let sendToWorker = document.getElementById(`sendToWorker`);
formul3.addEventListener("submit",(event)=>{//listener de formulario, no de hijos
    event.preventDefault()//para no actualizar pagina
    let inputWorkerValue = parseFloat(inputWorker.value);//transformar dato cadena en numero
    worker.postMessage(inputWorkerValue);//enviar dato
    worker.onmessage = function(message){//recibir respuesta
        console.log(message.data);
    }
})
//...codigo del worker........
// function fibonacci (n){//funcion X (dificil)
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// let cache = new Map(); //map() afuera de memoizer

// function memoizer(fn){//argumento sera funcion a guardar en cache
//     return function(...argumento){//funcion anonima da libertad a aplicar cualquier funcion.
//         //Rest da libertad alto numero de argumentos de funcion escogida
//         const key = JSON.stringify(argumento);

//         if(cache.has(key)){//argumento de cache es la k. Xke argumento es numero, y key es string.
//             console.log("numero encontrado")
//             return cache.get(key);//retorna value de key solicitada
//         }
//         const resultado = fn(argumento);//Si no se encuentra, se procede normalmente.
//         cache.set(key,resultado);//Se almacena clave y valor
//         console.log(cache)
//         return resultado;
//     }
// }

// onmessage = function(message){//recepcion de data
//     let mensaje = message.data//data.data
//     if(typeof mensaje == `number`){//typeof para especificar cadena o numero.
//         //NO SIN COMILLAS, aunque lo sugiera el editor...
//         const fiboMemo = memoizer(fibonacci)
//         const resultado = fiboMemo(mensaje);//funcion "global" dentro del worker
//         //"." innecesario antes de funcion.
//         self.postMessage(resultado)// envio de resultado
//     }else{//otra opcion, mismo worker, otra funcion.
//         let sum = 0;
//         for(let i =0;i<1000000000;i++){
//             sum+=i
//         }//esto para calculo dificil, pagina sigue funcional mientras worker calcula.
//         self.postMessage(sum)
//         //mientras else funcione, typeof se pega. Para instantaneo, otro worker dedicado.
// }}

//                 CACHE

caches.open("nombre de cache")//Si no esta, lo crea.
    .then(cache=>{
        return cache.add("testFileReader3.TXT")//argumento es request, URL que se quiere almacenar
        //equivalente a fetch() para cargar, y put() para guardarlo.
        .then(()=>cache.addAll(["testFileReader2.txt","testFileReader.txt"]))
        .then(()=>cache.match("testFileReader2.txt"))//match trabaja con promesas
        .then(res=>{//recordar que TODO va dentro de () del then actual. Y NO PONER ; DESPUES DEL CIERRE DEL () ANTERIOR.
            if(res){//condicional que permita resolver promesa
                return res.text().then(text=>{
                    let contenidoModificado = text.replace("2","7")//("texto que se desea remplazar","que dirá en su lugar")
                    return contenidoModificado
                });//retorno como text() solo si contenido es tipo text
            }else{throw new Error("archivo no encontrado en cache")}//no olvidar condicion para promesa rota.
        })
        .then(contenidoTexto=>{
            console.log(contenidoTexto)
        }).catch(error=>{//no olvidar catch
            console.log(error)
        })})
        .then(()=>{
            caches.open("nombre de cache")
            .then((cache)=>{
            return cache.matchAll("testFileReader3.TXT")//match para todos los del mismo nombre
            .then(responses=>{
                const contenidosTextos=[]//array vacio que permite almacenar mensajes de varios txt
                for (const response of responses) {
                    contenidosTextos.push(response.text())};//agrega strings al array vacio
                return Promise.all(contenidosTextos)//retorna el array, una vez todas las promesas se resuelven.
            .then(res2=>{
                return console.log(res2[0])})//retorna array, asique si se quiere el contenido, se selecciona con []
            }).catch(error=>{
                return console.log(error)
        })})})
            .then(()=>{
                caches.open("nombre de cache")
                .then((cache)=>{
                return cache.keys().then(res=>{
            return console.log(res)
        })})})
        .then(()=>{
            caches.open("nombre de cache")
            .then((cache)=>{
            return cache.delete("testFileReader.txt")
        })})
            //despues del return, debes sacar un nuevo .then, que use .open para abrir cache. Solo asi podras usar
            //delete, match o cualquier otro.
            //CLARAMENTE OPTIMIZABLE, pasando a service workers para optimizar codigo ahí.


//         SERVICE WORKERS

if(navigator.serviceWorker){
    navigator.serviceWorker.register("serviceWorker.js")
}


//       COOKIES

function nuevaFechaUTC(dias){
    const vencimiento = new Date(Date.now()+dias*1000*60*60*24);
    return vencimiento.toUTCString();
}

function crearOModCookie (nombre,dias){
    let expiracion = nuevaFechaUTC(dias)
    document.cookie = `${nombre};expires=${expiracion}`;
}

function obtenerCookie (nombreCookie){
    let cookies = document.cookie;//crear variable cookie
    cookies = cookies.split(";")//separarlos de los atributos en cada ";"
    for(i=0;cookies.length>i;i++){
        let cookie = cookies[i].trim();//para quitar posibles espacios en blanco y singularizar cookies.
        if(cookie.startsWith(nombreCookie)){
            console.log(cookie.split("=")[1])
            console.log(cookie)
            return cookie.split("=")[1]//parte clave=valor a la mitad, 0 = clave, 1 = valor;
}}
        return console.log("no hay cookies con ese nombre")
}
//para eliminar, agregar atributo max-age=0 antes de cerrar primeras "".
//para modificar, mantener clave, cambiar valor.
//IMPORTANTE: REVISAR RGPD Y ePrivacy!!!!


//             OBJETO SCREEN
let anchoPantalla = screen.pixelDepth// tb esta height, availWidth, availHeight, pixelDepth, colorDepth
//innerHeight es el viewport
//availHeight no considera interfaz
console.log(anchoPantalla)