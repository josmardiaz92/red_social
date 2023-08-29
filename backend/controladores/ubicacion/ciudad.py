#!C:/Python311/python.exe
import cgi
import cgitb #*Para ver errores
cgitb.enable()
import sys
sys.path.append('c:\\xampp\\htdocs\\Github\\red_social')
from backend.clases.ubicacion import ciudad as ciu
print('Content-type: text\html\n\n') #*aca aclaramos el tipo de contenido que se va a mostrar

#TODO recibimos las variables enviadas desde el formulario
formulario=cgi.FieldStorage()

""" #TODO comprobamos
print('ciudad',formulario['nom_ciu'].value) #*dame el valor que viene cargado en el input con el name... """

p=ciu.ciudad()
p.nom_ciu=formulario['nom_ciu'].value
p.des_ciu=formulario['des_ciu'].value
p.fky_est=formulario['fky_est'].value
p.fky_zon=formulario['fky_zon'].value
p.est_ciu=formulario['est_ciu'].value

p.conectar()
total=p.agregar()
print(f'Se agregó {total} ciudad')
p.cerrar()