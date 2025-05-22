'use strict';

// Veamos como evitar este error
try {
    let x = 10;
    miFuncion();
    throw "Mi error"; //Maneja el tipo string
}
catch (error){ //Tomamos el error y deja continuar el programa
    console.log(error);
    console.log(typeof (error));
}
finally{ //es un bloque opcional, pero siempre se va a ejecutar
    console.log("Termina la revicion de errores");
}

console.log("Continuamos..."); //Esto no se ejecuta dado que esta roto el programa por el error de arriba. 

let resultado = -4;

try {
    //y = 5; Uso de la clausula throw
    if (isNaN(resultado)) throw 'No es un numero'; //Preguntamos si es un numero
    else if( resultado === '') throw 'Es una cadena vacia';
    else if (resultado >= 0) throw 'Valor positivo';
    else if(resultado <= 0) throw 'Valor negativo';
}
catch(error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log('Termina la revision de errores 2');
}