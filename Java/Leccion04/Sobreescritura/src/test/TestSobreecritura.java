
package test;

import domain.*;

public class TestSobreecritura {
    public static void main(String[] args) {
           Empleado empleado1 = new Empleado("Juan", 10000);
           imprimir(empleado1);
           //System.out.println("empleado1 = "+ empleado1.obtenerDetalles());
           Gerente gerente1 = new Gerente("Jose", 5000, "Sistemas");
           imprimir(gerente1);
           //System.out.println("gerente1 = " + gerente1.obtenerDetalles());
    }
    
    public static void imprimir(Empleado empleado){
        String detalles = empleado.obtenerDetalles();
        System.out.println("detalles = " + detalles);
    }
    
    
}
