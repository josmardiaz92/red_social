#!C:/Python311/python.exe
import cgi
import cgitb #*Para ver errores
cgitb.enable()
import sys
sys.path.append('c:\\xampp\\htdocs\\Github\\red_social')
from backend.clases.ubicacion import pais as pai
print('Content-type: text\html\n\n') #*aca aclaramos el tipo de contenido que se va a mostrar

#TODO recibimos las variables enviadas desde el formulario
formulario=cgi.FieldStorage()


p=pai.pais()
p.cod_pai=formulario['cod_pai'].value
p.nom_pai=formulario['nom_pai'].value
p.des_pai=formulario['des_pai'].value
p.ali_pai=formulario['ali_pai'].value
p.cti_pai=formulario['cti_pai'].value
p.fky_con=formulario['fky_con'].value
p.est_pai=formulario['est_pai'].value

p.conectar()
total=p.modificar()
print(f'Se editó {total} pais')
p.cerrar()