
package accesodatos;


public interface IAccesoDatos {
    int MAX_REGISTRO = 10;
    
    //Metodo insertar en abstracto y sin cuerpo
    
    void insertar();
    
    void listar ();
    
    void acatualizar(); 
    
    void eliminar();
}
