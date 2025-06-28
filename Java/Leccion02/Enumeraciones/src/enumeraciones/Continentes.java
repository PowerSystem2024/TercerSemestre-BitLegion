package enumeraciones;

public enum Continentes {
    AFRICA(54,"1.400 millones"),
    EUROPA(44, "741 millones"),
    ASIA(49, "4.773 millones"),
    AMERICA(35,"1.036.9 millones"),
    OCEANIA(14,"46 millones");
    
    private final int paises;
    private String habitantes;
    
    Continentes(int paises, String habitantes){
    this.paises = paises;
    this.habitantes = habitantes;
    }
    
    //Metodo Get   
    public int getPaises(){
        return this.paises;
    }
    
    public String getHabitantes(){
        return this.habitantes;
    }
}
