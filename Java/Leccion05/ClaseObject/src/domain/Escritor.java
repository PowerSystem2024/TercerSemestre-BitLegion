package domain;

public class Escritor extends Empleado{
    final TipoEscritura tipoEscritura;
    
    public Escritor(String nombre, double sueldo, TipoEscritura tipoEscritura){
        super (nombre, sueldo);
        this.tipoEscritura = tipoEscritura;
    }
    
    //Metodo para sobreescribir
    @Override
    public String obtenerDetalles(){
        return super.obtenerDetalles()+", Tipo Escritura: "+tipoEscritura.getDescripcion();
    }
    
    @Override
    public String toString() {
        return "Escritor{" + "tipoEscritura=" + tipoEscritura + "}"+" "+super.toString();
    }
    
    public TipoEscritura getEscritura(){
        return this.tipoEscritura;
}

    public void getTipoEscritura() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}