
""" #TODO clase para la tabla pais
#*Importación de la clase de base de datos
from ..base_datos import postgres_conexion as bd #Tambien se puede: import base_datos.postgres_conexion as bd """

class pais(bd.base_datos):
    #*Funcion constructora, los parametros seran el nombre de las columnas en la base de datos
    def __init__(self):
        self.cod_pai=''
        self.nom_pai=''
        self.des_pai=''
        self.ali_pai=''
        self.cti_pai=''
        self.fky_pai=''
        self.est_pai=''
    def agregar(self):
        #*Llamamos a la funcion para guardar en la base de datos
        sql=f"""select ubicacion.agregar_pais('{self.nom_pai}','{self.des_pai}','{self.ali_pai}','{self.cti_pai}',{self.fky_pai},'{self.est_pai}')"""
        self.cursor.execute(sql) #*Le decimos al cursor que deseamos ejecutar la sentencia sql
        self.conexion.commit() #*Confirmamos la ejecución de la sentencia sql
        contador=self.cursor.rowcount #*Contamos el numero de filas afectadas
        return contador #*retornamos el contador
    def modificar(self):
        #*Llamamos a la funcion para modificar en la base de datos
        sql=f"""select ubicacion.pais_modificarar({self.cod_pai},'{self.nom_pai}','{self.des_pai}','{self.ali_pai}','{self.cti_pai}',{self.fky_pai},'{self.est_pai}')"""
        self.cursor.execute(sql) #*Le decimos al cursor que deseamos ejecutar la sentencia sql
        self.conexion.commit() #*Confirmamos la ejecución de la sentencia sql
        contador=self.cursor.rowcount #*contador de resultados
        return contador #*retornamos la contador
    def listar(self):
        #*Llamamos a la funcion para listar en la base de datos
        sql=f"""select ubicacion.pais_listar()"""
        self.cursor.execute(sql) #*Le decimos al cursor que deseamos ejecutar la sentencia sql
        self.conexion.commit() #*Confirmamos la ejecución de la sentencia sql
        lista=self.cursor.fetchall() #*Lista de resultados
        return lista #*retornamos la lista
    def eliminar(self):
        #*Llamamos a la funcion para eliminar en la base de datos
        sql=f"""select ubicacion.pais_eliminar({self.cod_pai})"""
        self.cursor.execute(sql) #*Le decimos al cursor que deseamos ejecutar la sentencia sql
        self.conexion.commit() #*Confirmamos la ejecución de la sentencia sql
        contador=self.cursor.rowcount #*contador de resultados
        return contador #*retornamos la contador
    

#*Instanciamos un objeto
p=pais()
p.conectar()
p.nom_pai='III Reich'
p.des_pai='Pais de pedroschausen'
p.ali_pai='Pedronshafnchausen'
p.cti_pai='+74'
p.fky_pai=1
p.est_pai='A'
p.agregar()
p.cerrar()