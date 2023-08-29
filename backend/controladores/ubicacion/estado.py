#!C:/Python311/python.exe
import cgi
import cgitb #*Para ver errores
cgitb.enable()
import sys
sys.path.append('c:\\xampp\\htdocs\\Github\\red_social')
from backend.clases.ubicacion import estado as est
print('Content-type: text\html\n\n') #*aca aclaramos el tipo de contenido que se va a mostrar

#TODO recibimos las variables enviadas desde el formulario
formulario=cgi.FieldStorage()

p=est.estado()
p.nom_est=formulario['nom_est'].value
p.des_est=formulario['des_est'].value
p.fky_pai=formulario['fky_pai'].value
p.est_est=formulario['est_est'].value

p.conectar()
total=p.agregar()
print(f'Se agregó {total} estado')
p.cerrar()