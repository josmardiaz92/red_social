
#TODO conexión con la base de datos postgres
import psycopg2 #*traigo la libreria que me permitirá la conexion con postgres

class base_datos:
    #*función constructora
    def __init__(self):
        self.conexion=''
        self.cursor=''
    #*Nos conectamos a la base de datos
    def conectar(self):
        self.conexion=psycopg2.connect(user='postgres',password='240296',host='localhost',port='5432',database='diplomado')
        self.cursor=self.conexion.cursor()
    #*Cerramos la conexion y el cursor
    def cerrar(self):
        self.conexion.close()
        self.cursor.close()