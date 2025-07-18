
package paquete2;


public class Clase4 {
    private String atributoPrivate = "atributo Privado";
    
    private Clase4(){
        System.out.println("Constructor privado");
    }
    
    //Creamos un constructor publico para poder crear objetos
    public Clase4(String argumento){ //Se puede llamar al constructor vacio
        this();
        System.out.println("Constructor publico");
    }
    
    //Metodo privado
    private void metodoPrivado(){
        System.out.println("Metodo privado");
    }

    public String getAtributoPrivate() {
        return atributoPrivate;
    }

    public void setAtributoPrivate(String atributoPrivate) {
        this.atributoPrivate = atributoPrivate;
    }
}
