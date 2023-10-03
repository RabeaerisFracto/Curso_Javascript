let canvas;//la declaro antes, le doy valor en onload
let ctx;
let flowField;//Para que no se distorcione efecto, debo incluir nuevas medidas. Lo saco un lvl mas arriba para incluirlo
//en el eventListener. newFFE incluira nuevas medidas acordes al resize. ES UN NUEVO OBJETO DE CLASE.
let animacionFlowField;//creo esta variable x el requestAnimationFrame del metodo animar(). Su argumento da facilmente
//error en el eventListener global x el this y el bind. Si lo asigno como variable, no habra error en reconocer que es 
//la accion sobre la que busco actuar a nivel global, aunque sea parte de un metodo de clase.

window.onload = function(){//window x sobre document, asi espera a que carge TODO
    canvas = document.getElementById(`canvasid`);//elemento. solo da dimensiones. Necesario contexto.
    ctx = canvas.getContext(`2d`);//puede ser 2d o webgl. hay mas pero son los principales.
    canvas.width = window.innerWidth;//ajustar a ancho y alto de ventana
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx,canvas.width,canvas.height);
    //nuevo objeto de clase, con los 3 parametros del constructor, que incluye la altura y ancho del canvas
    //encapsulacion = tomamos una var global(Linea 3), y la convertimos en un CF privado(L12,15,16)
    //esto es un objeto de clase global, que usa parametros privados de clase.
    flowField.animar(0);
    // window.addEventListener(`resize`,()=>{ //para que se exprese, debe estar dentro de la funcion onload
    // canvas.width = window.innerWidth;//tb puede ser declarando la variable afuera, y dandole valor dentro de onload
    // canvas.height = window.innerHeight;})
    //se pasa 0 como argumento "timestamp"
}

    window.addEventListener(`resize`,()=>{ //para que se exprese, debe estar dentro de la funcion onload
    cancelAnimationFrame(animacionFlowField);
    canvas.width = window.innerWidth;//tb puede ser declarando la variable afuera, y dandole valor dentro de onload
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx,canvas.width,canvas.height);//de esta manera, la animacion sabe del espacio
    //disponible en el que puede dibujar.
    flowField.animar(0);//hay que llamar al metodo nuevamente xke es nueva instancia con nuevos datos.
    //Si no se cancela animacion anterior, corren las 2 (o+) juntas. Son != instancias, todas animadas.
    //se pasa 0 como argumento "timestamp"
})

const mouseLocation = {//para interaccion con mouse, creo array con posiciones
    x:0,
    y:0,
}
window.addEventListener(`mousemove`,(e)=>{
    mouseLocation.x = e.x;//cambio valor de k anterior por la posicion x del evento disparado
    mouseLocation.y = e.y;
})
class FlowFieldEffect {//crearemos clases para jugar con  class fields privadas y publicas
    #ctx;//necesario declarar las privadas antes del constructor, antes de darles valores en constructor.
    #width;//sino, syntax error
    #height;
    constructor(ctx,width,height){
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;
        this.x = this.#width;//para comprobar el metodo de animar(), x e y se toman desde el punto "0"
        this.y = this.#height;
        // this.#dibujarLinea(10,10);//se llama al metodo de L23 desde dentro del constructor, x ser privado.
        this.angulo = 0;
        this.#ctx.lineWidth = 1.5
        this.lastime = 0;//va a representar el tiempo en msde el frame "anterior". Se actualizara en el metodo "animar".
        this.intervalo = 1000/120;// se repite cada X ms
        this.timer = 0;//para añadir tiempo delta una y otra vez partiendo de 0 hasta ke acomule el tiempo acorde al intervalo.
        this.cellSize = 13;// tamaño de celda en "grid". Overlap entre largoLinea y ~
        this.radio = 0;
        this.vr = 0.005;//velocidad de rotacion
        this.gradiente;
        this.#crearGradinte();
        this.#ctx.strokeStyle = this.gradiente;//estilo de contexto
    }
    #crearGradinte(){
        this.gradiente = ctx.createRadialGradient(this.x,this.x,600,this.y,this.y,50);
        this.gradiente.addColorStop(0.3, "yellow");
        this.gradiente.addColorStop(0.5, "green");
        this.gradiente.addColorStop(0.8, "pink");
        // const gradiente = ctx.createLinearGradient(x0, y0, x1, y1);
        // x0 y y0: Las coordenadas del punto de inicio del gradiente lineal.
        // x1 y y1: Las coordenadas del punto final del gradiente lineal.
    }
    #dibujarLinea(angle,x,y){//metodo de clase privado. Solo puede ser llamado desde dentro de la clase.
        let posicionX = x;//interaccion con mouse
        let posicionY = y;
        let catetoX = mouseLocation.x - posicionX;
        let catetoY = mouseLocation.y - posicionY;
        let hipotenusa = catetoX*catetoX+catetoY*catetoY;

        const largoLinea = hipotenusa/7000//se puede crear k para no modificar cada numero si se quiere hacer algo
        //homogeneo. La k debe estar antes de su expresion
        this.#ctx.beginPath();//nuevo punto "1"
        this.#ctx.moveTo(x,y);//posicion punto numero 1.
        // this.#ctx.lineTo(x+largoLinea,y+largoLinea);//posicion punto 2. Se puede extender a X numero de puntos
        this.#ctx.lineTo(x+Math.cos(angle)*largoLinea,y+Math.sin(angle)*largoLinea);
        // this.#ctx.lineTo(mouseLocation.x,mouseLocation.y);
        this.#ctx.stroke();//ordenar "dibujar"
    }
    animar(timestamp){//requestAnimationFrame devuelve un timestamp que puede ser usado como argumento en el metodo de clase que lo contiene
        const deltatime = timestamp - this.lastime;// la k deltatime es la diferencia entre el timestamp que retorna el requestAnimation y el this.timestamp en contructor
        this.lastime = timestamp;//actualizacion del timestamp del contructor
        if(this.timer > this.intervalo){//solo cuando contador supera intervalo buscado.
            this.angulo += 0.1;
            this.#ctx.clearRect(0,0,this.#width,this.#height);//Se toma contexto en constructor, y se argumentax e y inicial,
            //y el x e y de termino. se toma 0,0 (esq sup izq), hasta los #, es decir, hasta la ultima linea dibujada.
            this.radio += this.vr;
            if(this.radio >5 || this.radio<-5) this.vr*=-1;
            for(let y = 0; y < this.#height; y += this.cellSize){
                for(let x = 0; x < this.#width; x += this.cellSize){
                    const angle = ((Math.cos(x*0.01)+Math.sin(y*0.01)*this.radio)*this.radio);
                    this.#dibujarLinea(angle,x,y);
                    // this.#dibujarLinea(angle,x+Math.sin(this.angulo)*1.001,y+Math.cos(this.angulo)*1.5)
                }
            }
            // this.#dibujarLinea(this.x+Math.sin(this.angulo)*20,this.y+Math.cos(this.angulo)*20);//para experimentar desde un campo publico lo hacemos desde un metodo sin #
            //estamos tomando un metodo de clase privado, (con info global), y lo estamos usando para un metodo publico
            //asi puede ser usado desde afuera. Con los this.x/y, tomamos el puto inicial y se "imprime" en el 1er frame.
            //#width/2 dara el centro del canvas
            // this.x += 2;//X ahora esta 2 pixeles a la derecha. y en el sgt frame, 2 px mas a la derecha. Etc.
            // this.y += 0.5;
            this.timer = 0;//contador timer vuelve a 0
        }else{
            this.timer += deltatime;//si intervalo es mas grande, añade deltatime cuantas veces sea necesario.
        }
        animacionFlowField = requestAnimationFrame(this.animar.bind(this));//mejor ke setInterval en canvas. Se dibuja linea al seguir bajando se llama a si misma
        //necesario el bind, xke el request olvida que this representa el objeto flowField.
    }
}