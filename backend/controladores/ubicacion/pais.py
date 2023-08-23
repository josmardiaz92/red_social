#!C:/Python311/python.exe
import cgi
import sys
sys.path.append('c:\\xampp\\htdocs\\Github\\redsocial-fanpage')
from backend.clases.ubicacion import pais as pai
print('Content-type: text\html\n\n') #*aca aclaramos el tipo de contenido que se va a mostrar

#TODO recibimos las variables enviadas desde el formulario
formulario=cgi.FieldStorage()

""" #TODO comprobamos
print('pais',formulario['nom_pai'].value) #*dame el valor que viene cargado en el input con el name... """



