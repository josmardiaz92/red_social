import sys
sys.path.append('c:\\xampp\\htdocs\\Github\\red_social')

from backend.clases.base_datos import postgres_conexion as bd
class continente(bd.base_datos):
    #*Funcion constructora, los parametros seran el nombre de las columnas en la base de datos
    def __init__(self):
        self.cod_con=''
        self.nom_con=''
        self.des_con=''
        self.est_con=''
    def agregar(self):
        #*Llamamos a la funcion para guardar en la base de datos
        sql=f"""select ubicacion.continente_agregar('{self.nom_con}','{self.des_con}','{self.est_con}')"""
        self.cursor.execute(sql) #*Le decimos al cursor que deseamos ejecutar la sentencia sql
        self.conexion.commit() #*Confirmamos la ejecución de la sentencia sql
        contador=self.cursor.rowcount #*Contamos el numero de filas afectadas
        return contador #*retornamos el contador
    def modificar(self):
        #*Llamamos a la funcion para modificar en la base de datos
        sql=f"""select ubicacion.continente_modificar({self.cod_con},'{self.nom_con}','{self.des_con}','{self.est_con}')"""
        self.cursor.execute(sql) #*Le decimos al cursor que deseamos ejecutar la sentencia sql
        self.conexion.commit() #*Confirmamos la ejecución de la sentencia sql
        contador=self.cursor.rowcount #*contador de resultados
        return contador #*retornamos la contador
    def listar(self):
        #*Llamamos a la funcion para listar en la base de datos
        sql=f"""select ubicacion.continente_listar()"""
        self.cursor.execute(sql) #*Le decimos al cursor que deseamos ejecutar la sentencia sql
        self.conexion.commit() #*Confirmamos la ejecución de la sentencia sql
        lista=self.cursor.fetchall() #*Lista de resultados
        return lista #*retornamos la lista
    def eliminar(self):
        #*Llamamos a la funcion para eliminar en la base de datos
        sql=f"""select ubicacion.continente_eliminar({self.cod_con})"""
        self.cursor.execute(sql) #*Le decimos al cursor que deseamos ejecutar la sentencia sql
        self.conexion.commit() #*Confirmamos la ejecución de la sentencia sql
        contador=self.cursor.rowcount #*contador de resultados
        return contador #*retornamos la contador