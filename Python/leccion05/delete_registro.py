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
            sentencia = 'DELETE FROM persona WHERE id_persona = %s'
            entrada = input('Digite el número de registro a eliminar: ')
            valores = (entrada,) #Tupla
            cursor.execute(sentencia, valores) # Para ejecutar la sentencia
            registros_eliminados = cursor.rowcount 
            print(f'Los registros actualizados son: {registros_eliminados}')
            
            
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally: 
    conexion.close()