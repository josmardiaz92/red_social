#!C:/Python311/python.exe
import cgi
import cgitb
cgitb.enable()
import sys
sys.path.append('c:\\xampp\\htdocs\\Github\\red_social')
from backend.clases.ubicacion import continente as con
print('Content-type: text\html\n\n') #*aca aclaramos el tipo de contenido que se va a mostrar

#TODO recibimos las variables enviadas desde el formulario
formulario=cgi.FieldStorage()

p=con.continente()
p.nom_con=formulario['nom_con'].value
p.des_con=formulario['des_con'].value
p.est_con=formulario['est_con'].value

p.conectar()
total=p.agregar()
print(f'Se agregó {total} continente')
p.cerrar()