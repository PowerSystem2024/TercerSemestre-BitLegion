package test;

public class TestArgumentosVariables {
    public static void main(String[] args) {
        imprimirNumeros(3, 4, 5);
        imprimirNumeros(1, 2);
        variosParametros("Oriana","Aguilera Salinas", 7, 8, 9);
    }
    
    private static void variosParametros(String nombre,String apellidos, int ...numeros){
        System.out.println("Nombre: "+nombre);
         System.out.println("Apellidos: "+apellidos);
        imprimirNumeros(numeros);
    }
    
    private static void imprimirNumeros(int ...numeros){
        for (int i = 0; i < numeros.length; i++){
            System.out.println("Elementos: "+numeros[i]);
        }
    }
}
 