// Clase base
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }
}

// Clase Raton
class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

// Clase Teclado
class Teclado extends DispositivoEntrada {
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

// Clase Monitor
class Monitor {
    static contadorMonitor = 0;

    constructor(marca, tamanio) {
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    toString() {
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamanio: ${this._tamanio}]`;
    }
}

// Clase Computadora
class Computadora {
    static contadorComputadora = 0;

    constructor(nombre, monitor, raton, teclado) {
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    toString() {
        return `Computadora ${this._idComputadora}: ${this._nombre}\n ${this._monitor}\n ${this._raton}\n ${this._teclado}`;
    }
}

// Clase Orden
class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora); // Puedes agregar validación si no quieres duplicados
    }

    mostrarOrden() {
        let computadorasOrden = '';
        for (let computadora of this._computadoras) {
            computadorasOrden += `\n${computadora}`;
        }
        const salida = `Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`;
        console.log(salida);
        return salida;
    }
}

//Polimorfismo
function mostrarContenido(dispositivo){
    //Imprime el toString de cada clase independiente del objeto que se pase como referencia
    console.log(dispositivo.toString());
}

// Instancias y pruebas
let raton1 = new Raton('USB', 'HP');
let raton2 = new Raton('Bluetooth', 'Dell');
let teclado1 = new Teclado('USB', 'HP');
let teclado2 = new Teclado('Bluetooth', 'MSI');
let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);

let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
let computadora2 = new Computadora('Acer', monitor2, raton2, teclado2); // Acer corregido

console.log(computadora1.toString());
console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2); // Duplicado permitido
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();

//Prueba del polimorfismo.
mostrarContenido(raton1);
mostrarContenido(computadora1);
mostrarContenido(teclado1);