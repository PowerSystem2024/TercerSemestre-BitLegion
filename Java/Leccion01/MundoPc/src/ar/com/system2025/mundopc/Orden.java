package ar.com.system2025.mundopc;

public class Orden {
    private final int idOrden;
    private Computadora computadora[]; //arreglo de objetos
    private static int contadorOrdenes;
    private static final int MAX_COMPUTADORAS = 10;
    private int contadorComputadora; 
    
    // Constructor vacio
    public Orden(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadora = new Computadora[Orden.MAX_COMPUTADORAS];
    }
    
    //Metodo para agregar una nueva computadora al arreglo
    public void agregarComputadora(Computadora computadora){
    if (this.contadorComputadora < Orden.MAX_COMPUTADORAS){
        this.computadora[this.contadorComputadora++] = computadora;
    }
    else{
        System.out.println("Has superado el limite: "+Orden.MAX_COMPUTADORAS);
    }
    }
    
    // Mostrar orden
    public void mostrarOrden(){
        System.out.println("Orden #: "+this.idOrden);
        System.out.println("Computadoras de la orden #: "+this.idOrden);
        for(int i = 0; i < this.contadorComputadora; i++){
            System.out.println(this.computadora[i]);
        }
    }
}
