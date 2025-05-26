function NReinas(N) {
    if (N < 8) {
        console.log("El valor de N debe ser al menos 8");
        return;
    }

    const tablero = Array.from({ length: N }, () => Array(N).fill("-"));
    const reinas = [];

    function impTablero(tab) {
        const separador = "   " + Array.from({ length: N }, (_, i) => i).join("  ");
        console.log(separador); //muestra las columnas
        tab.forEach((fila, idx) => {//imprime el tablero colocando el valor de las filas al margen
            const fil = fila.map(celda => ` ${celda}`).join("");
            console.log(`${idx} |${fil}`);
        });

        console.log("  " + "-".repeat(N * 3)); //imprime un separador para mejor visibilidad
    }

    function Seguro(fila, col) { //Determina si puedo o no colocar una reina en determinada posicion
        for (let filaAnterior = 0; filaAnterior < fila; filaAnterior++) {
            const colAnterior = reinas[filaAnterior];
            const mismaColumna = colAnterior === col;
            const enDiagonal = Math.abs(fila - filaAnterior) === Math.abs(col - colAnterior);
            if (mismaColumna || enDiagonal) return false;
        }
        return true;
    }

    function pos(fila) { //Posiciona una reina o - si corresponde
        if (fila === N) return true;

        for (let col = 0; col < N; col++) {
            if (Seguro(fila, col)) {
                reinas[fila] = col;
                tablero[fila][col] = "👑";

                if (pos(fila + 1)) return true;
                tablero[fila][col] = "-";
                reinas[fila] = undefined;
            }
        }
        return false;
    }

   
    console.log("Buscando solución para N=", N); //Titulo

    if (pos(0)) { 
        console.log("Solución encontrada:");
        impTablero(tablero);
        console.log("Posiciones de las reinas (fila -> columna):");
        reinas.forEach((col, fila) => {
            console.log(`   Fila ${fila} → Columna ${col}`);
        });
    } else {
        console.log("No se encontró una solución para N =", N);
    }
}

// Prueba para las N reinas. Cambiar el valor 

NReinas(9);