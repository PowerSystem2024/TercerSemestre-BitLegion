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
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s' # Placeholder
            entrada = input('Digite los id_persona a buscar (separados por comas): ')
            llaves_primarias = (tuple(entrada.split(', ')),)
        cursor.execute(sentencia, (llaves_primarias)) # Recuperamos todos los registros que serían una lista y se imprimen en duplas
        registros = cursor.fetchall()
        for registro in registros:
            print(registro)

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally: 
    conexion.close()