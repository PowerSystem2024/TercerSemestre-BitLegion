package domain;

public abstract class FiguraGeometrica {
    protected String tipoFigura;
    
    protected FiguraGeometrica(String tipoFigura){
        this.tipoFigura = tipoFigura;
    }
    //Metodo abstracto
    public abstract void dibujar();
    
    //Agregamos el get y set
    
    public String getTipoFigura() {
        return tipoFigura;
    }
    
    public void setTipoFigura(String tipoFigura) {
        this.tipoFigura = tipoFigura;
    }
    
    @Override
    public String toString() {
        return "Figurageometrica{" + "tipoFigura=" + tipoFigura + "}";
    }
}
