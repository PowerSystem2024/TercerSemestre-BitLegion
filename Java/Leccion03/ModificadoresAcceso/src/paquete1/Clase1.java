
package paquete1;


public class Clase1 {
    public String atributoPublic = "Valor atributo public";
    protected String atributoProtected = "Valor atributo protected";
    
    public Clase1() {
        System.out.println("Constructor publico");
    }
    
    protected Clase1(String atributoPublic) {
        System.out.println("Metodo publico");
    }
    
    public void metodoPublico(){
        System.out.println("Metodo public");
 
    }
    
    protected void metodoProtected(){
        System.out.println("Metodo protected");
    }
}
