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

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1); //Clase Hija

let empleado1 = new Empleado("Juan", 2000);
console.log(empleado1);

