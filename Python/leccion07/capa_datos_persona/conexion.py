from psycopg2 import pool
# import psycopg2 as bd
# from logger_base import log

class Conexion:
    _DATABASE = 'postgres'
    _USERNAME = 'postgres'
    _PASSWORD = 'admin'
    _DB_PORT = '5432'
    _HOST = 'localhost'
    _MIN_CON = 1
    _MAX_CON = 5
    _pool = None

    @classmethod
    def obtenerConexion(cls):
        conexion = cls.obtenerPool().getconn()
        log.debug(f'Conexión obtenida del pool: {conexion}')
        return conexion 
            
    @classmethod
    def obtenerCursor(cls):
        pass

    @classmethod
    def obtenerPool(cls):
        if cls._pool is None:
            try:
                cls._pool = pool.SimpleConnectionPool(cls._MIN_CON,
                                                        cls._MAX_CON,
                                                         host=cls._HOST,
                                                         user=cls._USERNAME,
                                                         password=cls._PASSWORD,
                                                         port=cls._DB_PORT,
                                                         database=cls._DATABASE
                log.debug(f'Creación del pool exitosa: {cls._pool}'))
                return cls._pool
            except Exception as e:
                log.error(f'Ocurrió un error al obtener el pool: {e}')
                sys.exit()
        else:
             return cls._pool
              
    @classmethod
    def liberarConexion(cls, conexion):
        cls.obtenerPool().putconn(conexion)
        log.debug(f'Regresamos la conexión del pool: {conexion}')

    @classmethod
    def cerrarConexiones(cls):
         cls.obtenerPool().closeall()

     
            
if __name__ == '__main__':
        conexion1 = Conexion.obtenerConexion()
        conexion2 = Conexion.obtenerConexion()
        conexion3 = Conexion.obtenerConexion()
        conexion4 = Conexion.obtenerConexion()
        conexion5 = Conexion.obtenerConexion()

