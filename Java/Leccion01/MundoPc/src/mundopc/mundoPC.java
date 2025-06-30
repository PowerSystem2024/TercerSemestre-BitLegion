package mundopc;

import ar.com.system2025.mundopc.*;

public class mundoPC {
    public static void main(String[] args) {
        // Computadora_1
        Monitor monitorHP = new Monitor("HP", 13); //Importar la clase
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        //Creamos otros objetos de diferente marca
        //Computadora_2
        Monitor monitorGamer = new Monitor("Gamer", 32); //Importar la clase
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        
        //Computadora_3
        Monitor monitorLenovo = new Monitor("Lenovo", 24); //Importar la clase
        Teclado tecladoLenovo = new Teclado("USB", "Lenovo");
        Raton ratonLenovo = new Raton("USB", "Lenovo");
        Computadora computadoraLenovo = new Computadora("Computadora Lenovo", monitorLenovo, tecladoLenovo, ratonLenovo);
        
        // Computadora_4
        Monitor monitorSamsung = new Monitor("Samsung", 25); //Importar la clase
        Teclado tecladoSamsung = new Teclado("USB", "Samsung");
        Raton ratonSamsung = new Raton("USB", "Samsung");
        Computadora computadoraSamsung = new Computadora("Computadora Samsung", monitorSamsung, tecladoSamsung, ratonSamsung);
        
        //Computadora_5
        Monitor monitorApple = new Monitor("Apple", 24); //Importar la clase
        Teclado tecladoApple = new Teclado("Inalambrico", "Apple");
        Raton ratonApple = new Raton("Inalambricoh", "Apple");
        Computadora computadoraApple = new Computadora("Computadora Apple", monitorApple, tecladoApple, ratonApple);
        
        //Computadora_6
        Monitor monitorAsus = new Monitor("Asus", 21); //Importar la clase
        Teclado tecladoAsus = new Teclado("USB", "Asus");
        Raton ratonAsus = new Raton("USB", "Asus");
        Computadora computadoraAsus = new Computadora("Computadora Asus", monitorAsus, tecladoAsus, ratonAsus);
        
        // Computadora_7
        Monitor monitorDell = new Monitor("Dell", 27); //Importar la clase
        Teclado tecladoDell = new Teclado("Bluetooth", "Dell");
        Raton ratonDell = new Raton("Bluetooth", "Dell");
        Computadora computadoraDell = new Computadora("Computadora Dell", monitorDell, tecladoDell, ratonDell);
        
        // Computadora_8
        Monitor monitorMSI = new Monitor("MSI", 27); //Importar la clase
        Teclado tecladoMSI = new Teclado("Bluetooth", "MSI");
        Raton ratonMSI = new Raton("Bluetooth", "MSI");
        Computadora computadoraMSI = new Computadora("Computadora MSI", monitorMSI, tecladoMSI, ratonMSI);
        
        // Computaora_9
        Monitor monitorAcer = new Monitor("Acer", 23); //Importar la clase
        Teclado tecladoAcer = new Teclado("Usb", "Acer");
        Raton ratonAcer = new Raton("USB", "Acer");
        Computadora computadoraAcer = new Computadora("Computadora Acer", monitorAcer, tecladoAcer, ratonAcer);
        
        // Computadora_10
        Computadora computadorasVarias = new Computadora("Computadoras de diferenres marcas", monitorHP, tecladoGamer, ratonHP);
        
        Orden orden1 = new Orden(); //Inicializamos el arreglo vacio
        Orden orden2 = new Orden(); // Una nueva lista para el objeto orden2
        Orden orden3 = new Orden();
        Orden orden4 = new Orden();
        Orden orden5 = new Orden();
        Orden orden6 = new Orden();
        Orden orden7 = new Orden();
        Orden orden8 = new Orden();
        Orden orden9 = new Orden();
        Orden orden10 = new Orden();
        
        
        
        orden1.agregarComputadora(computadoraHP);
        orden2.agregarComputadora(computadoraGamer);
        orden3.agregarComputadora(computadoraLenovo);
        orden4.agregarComputadora(computadoraSamsung);
        orden5.agregarComputadora(computadoraApple);
        orden6.agregarComputadora(computadoraAsus);
        orden7.agregarComputadora(computadoraDell);
        orden8.agregarComputadora(computadoraMSI);
        orden9.agregarComputadora(computadoraAcer);
        
        
        orden10.agregarComputadora(computadorasVarias);
        
        
        orden1.mostrarOrden();
        orden2.mostrarOrden(); 
        orden3.mostrarOrden();
        orden4.mostrarOrden();
        orden5.mostrarOrden();
        orden6.mostrarOrden();
        orden7.mostrarOrden();
        orden8.mostrarOrden();
        orden9.mostrarOrden();
       
       
        
    }
           
}
