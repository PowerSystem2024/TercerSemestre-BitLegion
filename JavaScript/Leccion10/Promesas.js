let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true; // Cambiar a false para obtener el resultado "Se produjo un error"
    if (expresion) {
        resolver('Resolvió correctamente');
    } else {
        rechazar('Se produjo un error');
    }
});

//miPromesa.then(
//    valor => console.log(valor),
//    error => console.log(error)
//);

//  Utilizando el chatch
//miPromesa
//  .then(valor => console.log(valor)) Formato correcto de escribir el codigo
//  .catch(error => console.log(error)); 

// llamada de funcion setTimeout desde la promesa
let promesa = new Promise((Resolver) => {
    //console.log("Inicio de Promesa");
    setTimeout(() => Resolver('Saludos desde promesa, callback, funcion flecha y setTimeout'), 3000);
    //console.log("Final de promesa");
});

// El llamado a la promesa
//promesa.then(valor => console.log(valor));

// async indica que una funcion regresa a promesa 
async function miFuncionConPromesa() {
    return 'Saludos con promesas y async';
}

// Llamado a la función y manejo de la promesa
//miFuncionConPromesa().then(valor => console.log(valor));

// Palabra await y async con promesas
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });

    //console.log(await miPromesa); // Mostramos directamente el resultado
    //await solo se ejecuta con funciones declaradas como async
}

funcionConPromesaYAwait();

//Promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout() {
    let miPromesa = new Promise(resolver => {
        console.log (' Inicio Funcion');
        setTimeout(() => resolver('Promesa con await y Timeout'), 3000);
        console.log (' Final Funcion');
    });

    console.log(await miPromesa);
}

//Llamamos a la función
funcionConPromesaAwaitTimeout();