import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        //Definimos la lista fuera del ciclo while
        List<Persona> personas = new ArrayList<>();;
        //Empezamos con el menu
        var salir = false;
        while(!salir){
            mostrarMenu();
        }//Fin del ciclo  while
    }//Fin metodo main

    private static void mostrarMenu(){
        //Mostramos las opciones
        System.out.println("""
                *******Listado de Personas ********
                1. Agregar
                2. Listar
                3. Salir
                """);
        System.out.println("Digite una de las opciones: ");
    }

}