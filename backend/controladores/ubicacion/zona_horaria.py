#!C:/Python311/python.exe
import cgi
import cgitb #*Para ver errores
cgitb.enable()
import sys
sys.path.append('c:\\xampp\\htdocs\\Github\\red_social')
from backend.clases.ubicacion import zona_horaria as zon
print('Content-type: text\html\n\n') #*aca aclaramos el tipo de contenido que se va a mostrar

#TODO recibimos las variables enviadas desde el formulario
formulario=cgi.FieldStorage()

p=zon.zona_horaria()
p.nom_zon=formulario['nom_zon'].value
p.acr_zon=formulario['acr_zon'].value
p.dif_zon=formulario['dif_zon'].value
p.est_zon=formulario['est_zon'].value

p.conectar()
total=p.agregar()
print(f'Se agregó {total} zona_horaria')
p.cerrar()