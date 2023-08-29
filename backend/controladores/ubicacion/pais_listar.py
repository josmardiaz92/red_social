#!C:/Python311/python.exe
import cgi
import cgitb #*Para ver errores
cgitb.enable()
import sys
sys.path.append('c:\\xampp\\htdocs\\Github\\red_social')
from backend.clases.ubicacion import pais as pai
print('Content-type: text\html\n\n') #*aca aclaramos el tipo de contenido que se va a mostrar

p=pai.pais()
p.conectar()

html=""" 
<!DOCTYPE html>
<html lang="es">
<head>
        <meta charset="latin1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../../../frontend/estilos/css/bootstrap/bootstrap.min.css">
        <link rel="stylesheet" href="../../../frontend/estilos/css/personalizados/estilos-vistas.css">
        <link rel="stylesheet" href="../../../frontend/estilos/css/iconos/css/all.min.css">
    <link rel="icon" href="../../../frontend/estilos/imagenes/logo-id.png" type="image/x-icon">
        <title>Agregar País</title>
</head>
<body>
	<div class="container-fluid">	
		<div class="row mt-4 d-flex justify-content-center">
			<div class="col-lg-8 header-personal p-4 d-flex justify-content-center">
				<img src="../../../frontend/estilos/imagenes/logo.png" class="img-fluid w-25">
			</div>
		</div>
		<div class="row mb-3 d-flex justify-content-center">
			<div class="col-lg-8 body-personal">
					<div class="row d-flex justify-content-center">
						<div class="col-lg-12">
							<h3 class="fondo-azul text-center mt-3 mx-4 p-2 bg-titulo-personal">Listado de Paises</h3>
						</div>
					</div> """
print(html)
encabezado=""" 
<div class="table-responsive">
    <table class="table table-striped table-hover table-bordered text-capitalize">
        <thead class="fondo-azul">
            <tr>
                <th>Nombre</th>
                <th>Alias</th>
                <th colspan="2">Código Telefónico</th>
                <th>Continente</th>
                <th>Estatus</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody> """
print(encabezado)

paises=p.listar()

for pais in paises:
    for str_pais in pais:
        datos=str_pais.strip('()').split(',') #*la funcion strip() elimina lo que se coloca dentro de los parentesis y split() separa el contenido segun lo que este dentro de los parentesis
        p.cod_pai,p.nom_pai,p.des_pai,p.ali_pai,p.cti_pai,p.fky_con,p.est_pai=datos
        fila=f""" 
            <tr>
                <td>{p.nom_pai.strip('""')}</td>
                <td>{p.ali_pai}</td>
                <td colspan="2">+{p.cti_pai}</td>
                <td>{p.fky_con}</td>
                <td>{p.est_pai}</td>
                <td class="text-center">
                    <a href="pais_editar.py?{p.cod_pai}"  target="_blank"><i class="fa-solid fa-eye" style="color: #001A6F" data-bs-toggle="tooltip" data-bs-placement="left" title="Ver"></i></a>
                    |
                    <i class="fa-solid fa-pencil" style="color: #001A6F" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar"></i>
                    | 
                    <i class="fa-solid fa-trash" style="color: #001A6F" data-bs-toggle="tooltip" data-bs-placement="right" title="Borrar"></i>
                </td>
            </tr> """
        print(fila)
pie=""" </tbody>
    </table>
</div>
<div class="row m-4 p-0 g-0 d-flex justify-content-center">
                        <a class="btn fondo-azul btn-formulario m-sm-2 col-sm-12 col-md-5 col-lg-3" href="pais_agregar.html">Agregar Paìs</a>	
                        <a class="btn fondo-azul btn-formulario m-sm-2 col-sm-12 col-md-5 col-lg-3" href="#">Buscar Paìs</a>					
                </div>
			</div>
		</div>	
	</div>
    <script src="../../../frontend/js/bootstrap/bootstrap.bundle.min.js"></script>
    <script src="../../../frontend/js/tooltip.js"></script>
</body>
</html> """
print(pie)
p.cerrar()
