#!C:/Python311/python.exe
import cgi
import cgitb #*Para ver errores
cgitb.enable()
import sys
sys.path.append('c:\\xampp\\htdocs\\Github\\red_social')
from backend.clases.ubicacion import continente as con
from backend.clases.ubicacion import pais as pai
print('Content-type: text\html\n\n') #*aca aclaramos el tipo de contenido que se va a mostrar

codigo=cgi.FieldStorage()


p=pai.pais()
c=con.continente()
p.conectar()
c.conectar()


p.cod_pai=codigo["cod_pai"].value
pais=p.buscar()
continentes=c.listar()




for datos in pais:
    for str_pais in datos:
        lista=str_pais.strip('()').split(',') #*la funcion strip() elimina lo que se coloca dentro de los parentesis y split() separa el contenido segun lo que este dentro de los parentesis
        p.cod_pai,p.nom_pai,p.des_pai,p.ali_pai,p.cti_pai,p.fky_con,p.est_pai=lista

selectContinente=''
for datos in continentes:
    for str_con in datos:
        listaContinentes=str_con.strip('()').split(',')
        c.cod_con,c.nom_con,c.des_con,c.est_con=listaContinentes
        selected = 'selected' if c.cod_con == p.fky_con else ''  # Agrega 'selected' si coincide
        select = f"""<option value="{c.cod_con}" {selected}>{c.nom_con}</option>"""
        selectContinente+=select

        cabecera=""" 
<!DOCTYPE html>
<html lang="es">
<head>
        <meta charset="latin1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../../../estilos/css/bootstrap/bootstrap.min.css">
        <link rel="stylesheet" href="../../../estilos/css/personalizados/estilos-vistas.css">
        <link rel="stylesheet" href="../../../estilos/css/iconos/css/all.min.css">
    <link rel="icon" href="../../../estilos/imagenes/logo-id.png" type="image/x-icon">
        <title>Editar País</title>
</head>
<body>
	<div class="container-fluid">	
		<div class="row mt-4 d-flex justify-content-center">
			<div class="col-lg-8 header-personal p-4 d-flex justify-content-center">
				<img src="../../../estilos/imagenes/logo.png" class="img-fluid w-25">
			</div>
		</div>
		<div class="row mb-3 d-flex justify-content-center">
			<div class="col-lg-8 body-personal">
					<div class="row d-flex justify-content-center">
						<div class="col-lg-12">
							<h3 class="fondo-azul text-center mt-3 mx-4 p-2 bg-titulo-personal">Datos del Pais</h3>
						</div>
					</div> """

        body=f""" 
            <form class="" method="post" action="../../../../backend/controladores/ubicacion/pais_editar.py" enctype="">
                    <input class="form-control" type="hidden" id="cod_pai" name="cod_pai" size="16" maxlength="100" placeholder="Ingrese Nombre del País" value="{p.cod_pai}">
					<div class="row m-3 d-flex justify-content-center align-items-end">
						<div class="col-sm-12 col-md-5">
							<label class="form-label" for="nom_pai">Nombre:</label>
						</div>
						<div class="col-sm-12 col-md-7">
							<input class="form-control" type="text" id="nom_pai" name="nom_pai" size="16" maxlength="100" placeholder="Ingrese Nombre del País" value="{p.nom_pai}">
						</div>
					</div>					
					<div class="row m-3 d-flex justify-content-center align-items-end">
						<div class="col-sm-12 col-md-5">
							<label class="form-label" for="des_pai">Descripción:</label>
						</div>
						<div class="col-sm-12 col-md-7">
							<input class="form-control" type="text" id="des_pai" name="des_pai" size="25" maxlength="100" placeholder="Ingrese Descripción del País" value="{p.des_pai}">
						</div>
					</div>					
					
					<div class="row m-3 d-flex justify-content-center align-items-end">
						<div class="col-sm-12 col-md-5">
							<label class="form-label" for="ali_pai">Alias:</label>
						</div>
						<div class="col-sm-12 col-md-7">
							<input class="form-control" type="text" id="ali_pai" name="ali_pai" size="25" maxlength="25" placeholder="Ingrese Alias del País" value="{p.ali_pai}">
						</div>
					</div>					
					
					<div class="row m-3 d-flex justify-content-center align-items-end">
						<div class="col-sm-12 col-md-5">
							<label class="form-label" for="cti_pai">Código Telefónico:</label>
						</div>
						<div class="col-sm-12 col-md-7">
							<input class="form-control" type="number" id="cti_pai" name="cti_pai" size="5" maxlength="5" placeholder="Ingrese Código Telefónico del País" value="{p.cti_pai}">
						</div>
					</div>					
					
					<div class="row m-3 d-flex justify-content-center align-items-end">
						<div class="col-sm-12 col-md-5">
							<label class="form-label" for="fky_con">Continente:</label>
						</div>
						<div class="col-sm-12 col-md-7">
							<select name="fky_con" id="fky_con" class="form-select cursor-pointer">
								<option value="">Seleccione...</option>
                                {selectContinente}
                                </select>
						</div>
					</div>					
					
					<div class="row m-3 d-flex justify-content-center align-items-end">
						<div class="col-sm-12 col-md-5">
							<label class="form-label" for="est_pai">Estatus:</label>
						</div>
						<div class="col-sm-12 col-md-7">
							<select name="est_pai" id="est_pai" class="form-select cursor-pointer">
								<option value="">Seleccione...</option>
								<option value="A" {'selected' if p.est_pai == 'A' else ''}>Activo</option>
								<option value="I" {'selected' if p.est_pai == 'I' else ''}>Inactivo</option>
							</select>
						</div>
					</div>
					<div class="row m-4 p-0 g-0 d-flex justify-content-center">
							<button class="btn fondo-azul btn-formulario m-sm-2 col-sm-12 col-md-5 col-lg-3" type="submit">Editar</button>	
							<a class="btn fondo-azul btn-formulario m-sm-2 col-sm-12 col-md-5 col-lg-3" href="pais_listar.html">Ir al Listado</a>		
							<input class="btn fondo-azul btn-formulario m-sm-2 col-sm-12 col-md-5 col-lg-3" type="reset" value="Limpiar">					
					</div>
				</form>	
            """
        pie=""" </div>
    </div>
</div>
    <script src="../../../js/bootstrap/bootstrap.bundle.min.js"></script>
    <script src="../../../js/tooltip.js"></script>
</body>
</html> """
print(cabecera,body,pie)
p.cerrar()
c.cerrar()


