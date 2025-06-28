import psycopg2

conexion = psycopg2.connect(
    user = 'postgres', 
    password = 'admin', 
    host = 'localhost', 
    port = '5432', 
    database = 'postgres'
)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'UPDATE persona SET nombre =%s, apellido = %s, email = %s WHERE id_persona = %s'
            valores = ('Juan Carlos', 'Roldán', 'rcarlos@gmail.com', 1) #Tupla
            cursor.execute(sentencia, valores) # Para ejecutar la sentencia
            registros_actualizados = cursor.rowcount 
            print(f'Los registros actualizados son: {registros_actualizados}')
            
            
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally: 
    conexion.close()