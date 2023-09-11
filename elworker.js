function fibonacci (n){//funcion X (dificil)
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
    }
let cache = new Map(); //map() afuera de memoizer

function memoizer(fn){//argumento sera funcion a guardar en cache
    return function(...argumento){//funcion anonima da libertad a aplicar cualquier funcion.
        //Rest da libertad alto numero de argumentos de funcion escogida
        const key = JSON.stringify(argumento);

        if(cache.has(key)){//argumento de cache es la k. Xke argumento es numero, y key es string.
            console.log("numero encontrado")
            return cache.get(key);//retorna value de key solicitada
        }
        const resultado = fn(argumento);//Si no se encuentra, se procede normalmente.
        cache.set(key,resultado);//Se almacena clave y valor
        console.log(cache)
        return resultado;
    }
}

onmessage = function(message){//recepcion de data
    let mensaje = message.data//data.data
    if(typeof mensaje == `number`){//typeof para especificar cadena o numero.
        //NO SIN COMILLAS, aunque lo sugiera el editor...
        const fiboMemo = memoizer(fibonacci)
        const resultado = fiboMemo(mensaje);//funcion "global" dentro del worker
        //"." innecesario antes de funcion.
        self.postMessage(resultado)// envio de resultado
    }else{//otra opcion, mismo worker, otra funcion.
        let sum = 0;
        for(let i =0;i<1000000000;i++){
            sum+=i
        }//esto para calculo dificil, pagina sigue funcional mientras worker calcula.
        self.postMessage(sum)
        //mientras else funcione, typeof se pega. Para instantaneo, otro worker dedicado.
}}

