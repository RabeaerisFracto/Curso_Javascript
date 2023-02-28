//VARIABLES
let objeto = prompt("que objeto usaras");
let nombre = ["Aaron","Dominique","Jaiva"];
let respuesta = [" Bueno, veremos celulares<br>"," Ufff no quiero, que pena<br>"," Lo siento, solo tenemos celulares<br>"]
function nombreFiltrado(){
    if(objeto === "celular") return(nombre[0]);
    else if(objeto === "animal") return(nombre[1]);
    else(objeto !== "celular", "animal"); return(nombre[2])
}
function respuestaFiltrada(){
    if(objeto === "celular") return(respuesta[0]);
    else if(objeto === "animal") return(respuesta[1]);
    else(objeto !== "celular", "animal"); return(respuesta[2])
}
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
forContador:
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
    get getLenguaje(){
        return this._lenguaje;
    }    
    set setLenguaje(comunicacion){
        this._lenguaje = comunicacion;
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
hombre.setLenguaje = "cualquier otra wea";
hombre.hablar();
hombre.verInfo();

//METODOS DE CADENAS

let cad1 = "This series definitely deserves a remaster.";
let cad2 = " There are few games that do.";
let cad3 = " But the gameplay and mechanics in this game make it one of a kind.";
let cad4 = " now it looks visually modern again!";

let ras1 = "Th";
let ras2 = ".";


ena1 = cad1.concat(cad2,cad3,cad4);
ena2 = ena1.startsWith(ras1);
ena3 = ena1.endsWith(ras2)
ena4 = ena1.includes(ras1)
ena5 = ena1.indexOf("in")
ena6 = ena1.lastIndexOf("in")

document.write("<br>"+ena1+"<br>"+ena2+"<br>"+ena3+"<br>"+ena4+"<br>"+ena5+" "+ena6+"<br>");

rell1 = ras1.padStart(5,ras2) + " " + ras1.padEnd(5,ras2) + " " + ras1.repeat(5);

document.write("<br>"+rell1+"<br>");

mod1 = ena1.split(".");
document.write(mod1[2] + "<br>" + "<br>" + "<br>");

//METODOS DE ARRAYS

mod2 = mod1.pop(),mod1.shift(),mod1.reverse(),mod1.push(". That's it."),mod1.unshift("Number1","number2","number3","number4"),mod1.splice(1,3,"LetterA","LetterB","letterC");

document.write(mod1);

let mod3 = mod1.join("##");

document.write("<br>" + mod3);

let mod4 = mod1.slice(2,6);

document.write("<br>" + mod4);

mod1.forEach(x => {
    return(document.write("<br>" + x.slice(0,2) + x.charAt(2).toUpperCase() + x.slice(3)))
}); //slice para cortar frase hasta posicion de charAt, luego resto de frace con slice desde 1+ de charAt

let marcas = ["PlayStation","Razer","Edifier","LG","HP","Sapphire","Ryzen","Asus"];
// function cincoLet(desk){
//     return (desk.length > 4);
// }
marcas = marcas.filter(x => x.length > 4);

document.write(marcas);

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
