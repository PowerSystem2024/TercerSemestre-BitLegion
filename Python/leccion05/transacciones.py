import psycopg2 as bd

conexion = bd.connect(
    user = 'postgres', 
    password = 'admin', 
    host = 'localhost', 
    port = '5432', 
    database = 'postgres'
)

try:
    conexion.autocommit = False
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('María', 'Esparza', 'mesparza@gmail.com')
    cursor.execute(sentencia, valores)
    conexion.commit() # Hacemos el commit manualmente
    print('Termina la transacción')
except Exception as e:
    conexion.rollback()
    print(f'Ocurrió un error, se hizo un rollback: {e}')
finally: 
    conexion.close()