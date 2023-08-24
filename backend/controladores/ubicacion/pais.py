#!C:/Python311/python.exe
import cgi
import cgitb
cgitb.enable()
import sys
sys.path.append('c:\\xampp\\htdocs\\Github\\red_social')
from backend.clases.ubicacion import pais as pai
print('Content-type: text\html\n\n') #*aca aclaramos el tipo de contenido que se va a mostrar

#TODO recibimos las variables enviadas desde el formulario
formulario=cgi.FieldStorage()

""" #TODO comprobamos
print('pais',formulario['nom_pai'].value) #*dame el valor que viene cargado en el input con el name... """

p=pai.pais()
p.nom_pai=formulario['nom_pai'].value
p.des_pai=formulario['des_pai'].value
p.ali_pai=formulario['ali_pai'].value
p.cti_pai=formulario['cti_pai'].value
p.fky_con=formulario['fky_con'].value
p.est_pai=formulario['est_pai'].value

p.conectar()
total=p.agregar()
print(f'Se agregó {total} pais')
p.cerrar()