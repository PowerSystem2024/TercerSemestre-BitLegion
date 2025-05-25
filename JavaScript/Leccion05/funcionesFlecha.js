

//Funcion clasica

function miFuncion(){
    console.log("Saludos desde mi funcion");
}

miFuncion();

//Funcion anonima

let myFuncion = function(){
    console.log("Saludos desde la funcion anonima");
}

//Funcion flechas - No se aplica el fundamento de hosting
//Sintaxis formal
let miFuncionFlecha = () => { //una de las variantes de la sintaxis de la funcion flecha
    console.log("Saludos desde mi funcion flecha");
}

miFuncionFlecha();

//Sintaxis simplificada, solo sirbe para imprimir un mensaje
const saludar = () => console.log("Saludos desde esta funcion flecha");
console.log(saludar()); //ya tiene el console.log dentro de la funcion
saludar();

//Otra forma
//Podemos retornar 
const saludar2 = () => {
    return "Saludos desde la funcion flecha 2"
}
console.log(saludar2());

//Simplificamos la funcion anterior
const saludar3 = () => "Saludos desde la funcion flecha 3";
console.log(saludar3());

//Continuamos con otro ejemplo
const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});
console.log(regresaObjeto());

//Funciones flecha que reciben parametros
const funcionParametro = ( mensaje ) =>  console.log(mensaje);

funcionParametro('Saludos desde la funcion con parametros');

//Una funcion clasica
const funcionParametrosClasica = function( mensaje ){
    console.log( mensaje );
}
funcionParametrosClasica('Saludos desde la funcion clasica');

//Se pueden omitir los parentesis en las funcion flecha
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('Otra forma de trabajar con funcion flecha');

//Funcion flecha con varios parametros
const funcionConParametors2 = (op1, op2) =>{
    let resultado = op1 + op2;
    return resultado;
}
console.log(funcionConParametors2(3, 5)); 
