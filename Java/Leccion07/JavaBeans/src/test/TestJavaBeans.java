
package test;

import domain.Persona;


public class TestJavaBeans {
    public static void main(String[] args) {
       Persona persona = new Persona();
       persona.setNombre("Ginebra");
       persona.setApellido("Aguilera");
       System.out.println("persona = " + persona);
       
       System.out.println("Persona nombre: "+persona.getNombre());
       System.out.println("Persona apellido: "+persona.getApellido());
       
    }
    
}
