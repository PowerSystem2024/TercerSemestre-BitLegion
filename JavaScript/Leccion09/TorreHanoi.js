function torresDeHanoi(n, origen, destino, auxiliar) {
    if (n === 1) {
        console.log(`Mover disco 1 de ${origen} a ${destino}`);
        return 1;
    }
    
    let movimientos = 0;
    movimientos += torresDeHanoi(n - 1, origen, auxiliar, destino);
    console.log(`Mover disco ${n} de ${origen} a ${destino}`);
    movimientos++;
    movimientos += torresDeHanoi(n - 1, auxiliar, destino, origen);
    
    return movimientos;
}

// Configuración
const numDiscos = 3; // Puedes cambiar este valor
console.log(`\nSolución para ${numDiscos} discos:`);

// Ejecución
const totalMovimientos = torresDeHanoi(numDiscos, 'A', 'C', 'B');

// Resumen
console.log(`\nTotal de movimientos: ${totalMovimientos}`);
console.log(`Mínimo teórico de movimientos: ${Math.pow(2, numDiscos) - 1}`);