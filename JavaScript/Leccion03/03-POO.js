class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nmbre: ${this._nombre},
        Sueldo: ${this._sueldo}`;
    }
} //Fin de la clase Empleado

class Gerente extends Empleado{
    constructor(nombre, sueldo,departamento){
       super(nombre, sueldo);
       this._departamento = departamento; 
    }

    //Agregamos la sobreescritura
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles}, depto: ${this._departamento}`;
    }
} //Fin de la clase gerente

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles()); //Va a imrimir en funcion al tipo de objeto que recibe. Esto es el polimorfismo    
    if(tipo instanceof Gerente){
        console.log("Es un objeto de tipo Gerente");
        console.log(tipo._departamento);
    }
   // else if(tipo instanceof Empleado){
    //    console.log("Es de tipo Empleado");
    //}
    else if(tipo instanceof Object){
        console.log("Es de tipo Object");
        console.log(tipo._departamento); //nmo exixte en la clase padre, solo en la hija
     }
}

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1); //Clase Hija

let empleado1 = new Empleado("Juan", 2000);
console.log(empleado1);

//Llamamos al metodo imprimir para verificar lo del polimorfismo. 
imprimir(gerente1);
imprimir(empleado1);
