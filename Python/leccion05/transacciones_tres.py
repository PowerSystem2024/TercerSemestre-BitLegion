import psycopg2 as bd

conexion = bd.connect(
    user = 'postgres', 
    password = 'admin', 
    host = 'localhost', 
    port = '5432', 
    database = 'postgres'
)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
            valores = ('Alex', 'Rojas', 'arojas@gmail.com')
            cursor.execute(sentencia, valores)

            sentencia = 'UPDATE persona SET nombre = %s, apellido = %s, email = %s WHERE id_persona = %s'
            valores = ('Juan', 'Juárez', 'jjuarez@gmail.com', 1)
            cursor.execute(sentencia, valores)

            conexion.commit() # Hacemos el commit manualmente

except Exception as e:
    
    print(f'Ocurrió un error, se hizo un rollback: {e}')
finally: 
    conexion.close()


print('Termina la transacción.')