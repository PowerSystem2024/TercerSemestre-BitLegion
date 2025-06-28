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
            sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
            valores = (
                ('Carlos', 'Lara', 'clara@gmail.com'),
                ('Marcos', 'Canto', 'mcanto@gmail.com'),
                ('Marcelo', 'Cuenca', 'cuencam@gmail.com')
                ) # Es una tupla de tuplas
            cursor.executemany(sentencia, valores) # Para ejecutar la sentencia
            registros_insertados = cursor.rowcount 
            print(f'Los registros insertados son: {registros_insertados}')
            
            
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally: 
    conexion.close()