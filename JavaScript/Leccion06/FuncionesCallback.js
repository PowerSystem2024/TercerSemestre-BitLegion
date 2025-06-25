function miFuncion1(){
    console.log('Funcion 1');
}

miFuncion2(); //hosting

function miFuncion2(){
    console.log('Funcion2');
}

//Se llama de una manera secuencial en javaScript
miFuncion1(); //Esta primero
miFuncion2(); //Esta segundo

//Funciones de tipo callback
function imprimir( mensaje ){ //Funcion normal
    console.log( mensaje );
} 

let imp = function imprimir( mensaje ){ //Funcion normal
    console.log( mensaje );
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imprimir); //No hace falta poner los parentesis al llamar a la funcion
//La funcion imprimir entra como parametro de la funcion sumar. Tambien lo podemos hacer asignando la funcion a una variable. 
sumar(5, 3, imp); //Funciona de la misma manera
//Se usa cando se trabaja de manera asincrona, es decir que trabaja de manera separada cambiando el flujo


//llamadas asincronas con uso de la funcion setTimeout
//Esta nos permite iniciar a una nueva tarea despues de sirto tiempo
function miFuncionCallback(){
    console.log('Saludo asincrono despues de 3 segundos');
}

setTimeout(miFuncionCallback, 3000);

setTimeout(function(){console.log('Saludos asincrono 2')}, 5000);

setTimeout(()=> console.log('Saludos asincrono 3'), 4000);

//La funcion interval manda a llamar la funcion callback varias veces
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`);
}

setInterval(reloj, 1000); //Muestra la ejecucion cada un segundo

