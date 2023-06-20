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
  //definePropertie: (nombre de variable, `propiedad`,{value:"valor", writeable:solo lectura boolean})
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
    console.log("funcion no valida"); //aunsencia de cadena da mensaje default pero no es mensaje tipo error.
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
}); //slice para cortar frase hasta posicion de charAt, luego resto de frace con slice desde 1+ de charAt

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
fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png`)
.then(pokeX => pokeX.blob())                   //En ves de .json(), .blob()
.then(imgCla=> Golem.src = URL.createObjectURL(imgCla))  //URL.createObjectURL se usa para evitar confusiones. Nueva const.src = ~(Att)
.then(document.body.appendChild(Golem))  //asignar en nuevo hijo con appendChild(Const)
.catch(error=> console.log(error))

let fecha = new Date
document.write(fecha.getFullYear()); //tb esta:get~(Date,Day,Month,Year,Hour,etc)
//getFullYear es getYear+1970.

// GET Y POST (GPT)

const form = document.querySelector('#myForm');  //selector de formulario

addEventListener('submit', (e) => {         //el event es el boton submit, aplicar al form(selector de formulario)
  e.preventDefault(); // previene el comportamiento predeterminado del formulario.
  //Al llamar a preventDefault(), se detiene la acción predeterminada del formulario, lo que significa que los
  //datos del formulario no se enviarán de inmediato y se puede usar JavaScript para procesar los datos del
  //formulario de una manera personalizada.

  const formData = new FormData(form); // crea un objeto FormData con los valores del formulario
                                       //nueva K es igual a objeto nuevo FormData(K de selector)
  fetch('https://example.com/api/submit', {   //Aqui va la pagina a la ke se envia la info. esta en "action" en form html
    method: 'POST',                     //metodo post, si es get, no se pone nada xke esta x default
    body: formData,                     //aki se agrega la info mas delicada, que se quiere enviar al servidor
    // headers: {"Content-Type" : "aplication/json"}   //Con form data no es necesario esto, como tp stringyfy() el body
  })
  .then(response => {
    if (response.ok) {
      alert('Formulario enviado con éxito');
      form.reset();                    // resetea el formulario
    } else {
      alert('Ocurrió un error al enviar el formulario');
    }
  })
  .catch(error => {
    alert('Ocurrió un error al enviar el formulario');
    console.error(error);
  });
});
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
    e.preventDefault();
    cuadroPlomo.classList.remove("seleccionado")
})
cuadroPlomo.addEventListener("drop",(e)=>{
    console.log(4);
    const contenidoCuadroPlomo = e.dataTransfer.getData("text/plain");
    cuadroPlomo.textContent = contenidoCuadroPlomo;
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