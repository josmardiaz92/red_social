//TODO Toma de los elementos mediante la clase
const elementos=document.querySelectorAll('.validar');

//TODO toma los elementos que serviran para mostrar las validaciones
const alerta=document.getElementById('alerta');
const textoAlerta=document.getElementById('textoAlerta');
const alerta2=document.getElementById('alerta2');
const textoAlerta2=document.getElementById('textoAlerta2');
const alerta3=document.getElementById('alerta3');
const textoAlerta3=document.getElementById('textoAlerta3');

//TODO Aca estan como deben ir los valores para ser bien valorados
const valoresok={
    des_cat: '"Describa los elementos que identifican la categoría."',
    nom_cat: '"El nombre no debe incluir números ni caracteres especiales."',
    des_con: '"Ejemplo: nombre@correo.com 0414-1234568 www.nombre.com"',
    nom_fan_pag: '"El nombre no debe incluir números ni caracteres especiales."',
    des_fan_pag: '"Describa los elementos que identifican la a la fan page."',
    per_fan_pag: '"La foto debe ser en formato png, jpg, jpeg o svg"',
    url_mul: '"El archivo debe ser .png, .jpg, .jpeg, .svg, .mp4, .mov, .avi o .webm"',
    tit_pub: '"El título debe tener un maximo de 50 caracteres"',
    des_pub: '"Describa la publicación"'
}


//TODO Aca estan los nombres para cada campo
const nombresCampos={
    des_cat: '"Descripción de la categoría"',
    nom_cat: '"Nombre de la categoría"',
    est_cat: '"Estado de la categoría"',
    fky_fan_pag: '"Fan page"',
    fky_cat: '"Categoría"',
    des_con: '"Contacto"',
    fky_tip_con: '"Tipo de contacto"',
    est_con: '"Estado del contacto"',
    nom_fan_pag: '"Nombre de la fan page"',
    des_fan_pag: '"Descripción de la fan page"',
    per_fan_pag: '"Foto de Perfil de la fan page"',
    est_fan_pag: '"Estado de la fan page"',
    url_mul: '"Dirección URL del archivo"',
    fky_pub: '"Publicación"',
    est_mul: '"Estado del archivo"',
    tit_pub: '"Título de la publicación"',
    des_pub: '"Descripción de la publicacion"',
    fky_ciu: '"Ciudad"',
    fky_per: '"Persona"',
    fky_tip_aco: '"Tipo de acontecimiento"',
    est_pub: '"Estado de la publicación"',
    est_seg: '"Estado del seguidor"'
}

//TODO Aca se agregan las expresiones regulares, se hace en una lista y se coloca como propiedad el id de los elementos
const expresionesRegulares = {
    des_cat: /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/i,
    nom_cat: /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/i,
    est_cat: /A|I/,
    fky_fan_pag: /[0-9]+/,
    fky_cat: /[0-9]+/,
    des_con: /([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)|(((?:https\:\/\/)|(?:http\:\/\/)|(?:www\.))?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\??)[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~]+))|(^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$)/i,
    fky_tip_con: /[0-9]+/,
    est_con: /A|I/,
    nom_fan_pag: /^[A-Za-zÀ-ÖØ-öø-ÿ\s',0-9]+$/i,
    des_fan_pag: /([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)|(((?:https\:\/\/)|(?:http\:\/\/)|(?:www\.))?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\??)[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~]+))|(^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$)/i,
    per_fan_pag: /^.*\.(png|jpg|jpeg|svg)$/i,
    est_fan_pag: /[0-9]+/,
    url_mul: /^.*\.(png|jpg|jpeg|svg|mp4|mov|avi|webm)$/i,
    fky_pub: /[0-9]+/,
    est_mul: /A|I/,
    tit_pub: /([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)|(((?:https\:\/\/)|(?:http\:\/\/)|(?:www\.))?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\??)[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~]+))|(^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$)/i,
    des_pub: /([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)|(((?:https\:\/\/)|(?:http\:\/\/)|(?:www\.))?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\??)[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~]+))|(^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$)/i,
    fky_ciu: /[0-9]+/,
    fky_per: /[0-9]+/,
    fky_tip_aco: /[0-9]+/,
    est_pub: /A|P/,
    est_seg: /A|I/
};

//TODO en esta funcion se valida el contenido de los campos con respecto a las expresionesRegulares
const validarCampo=(campo,valor,expresionesRegular,nombreCampo)=>{
    const valido=expresionesRegular.test(valor);
    const valorok=valoresok[campo.id];
    const texto2=`El campo ${nombreCampo} no es valido\nTome en cuenta lo siguiente:\n ${valorok}`;
    const texto3=`El campo ${nombreCampo} es valido`;
    campo.classList.toggle("casilla",!valido);
    campo.classList.toggle("is-valid", valido); //*Si valido es true, se agrega "is-valid" a la clase del elemento
    campo.classList.toggle("is-invalid", !valido); //*Si valido es false, se agrega "is-invalid" a la clase del elemento
    campo.classList.toggle("invalida", !valido); //*Si valido es false, se agrega "invalida" a la clase del elemento
    campo.nextElementSibling.classList.toggle("invalid-feedback", !valido); //*Si valido es false, se agrega "invalid-feedback" a la clase del siguiente elemento
    campo.nextElementSibling.innerText = valido ? " " : `Introduzca un valor válido`; //*Dependiendo del valor de valido, de agregará el primer valor para true o el 2do para false
    if(!valido){
        aparecer(alerta2,textoAlerta2,texto2);
            setTimeout(() => {
                desaparecer(alerta2);
            }, 10000);
    }else{
        aparecer(alerta3,textoAlerta3,texto3);
            setTimeout(() => {
                desaparecer(alerta3);
            }, 3000);
    }
};

//TODO Aca es donde se ejecuta todo
elementos.forEach(elemento=>{
    elemento.addEventListener('blur',(evento)=>{
        const campo=evento.target;
        const valor=campo.value;
        const id=campo.id;
        const Regexp=expresionesRegulares[id];
        const nombreCampo=nombresCampos[id];
        const texto=`El campo ${nombreCampo} no puede ir vacio`;
        if(valor.length===0){
            campo.classList.remove("is-valid");
            campo.classList.remove("casilla");
            campo.classList.add("is-invalid");
            campo.classList.add("invalida");
            campo.nextElementSibling.classList.add("invalid-feedback");
            campo.nextElementSibling.innerText = "No puede dejarlo vacío";
            aparecer(alerta,textoAlerta,texto);
            setTimeout(() => {
                desaparecer(alerta);
            }, 3000);

        }else{
            validarCampo(campo,valor,Regexp,nombreCampo);
        }
        })
    });




function desaparecer(elem){
        elem.style.opacity=1;
        (function cambio() //paraanidar funciones dentro de otras, se debe encerrar la anidad en parentesis
        {
            if((elem.style.opacity-=0.01)<0) // como la funcion va a ser llamada recursivamente, por eso plamnteamos esta condicional
            {
                elem.classList.add("d-none");
            }
            else
            {
                requestAnimationFrame(cambio); //con esto es que se hace la llamada recursiva. esta funcion informa al navegador que quieres realizar una animacion y solicita que el navegador programe el repintado de la ventana para el proximo ciclo de la animacion.
            }
        })(); //si no se lococan esos dos parentesis extras, no funciona la funcion, esto es porque es una funcion anidada.
    }

function aparecer(elem,campoText,text){
    elem.style.opacity=0;
    elem.style.color='#0000FF';
    elem.classList.remove('d-none');
    campoText.innerText=text;
    (function cambiar()
    {
        let val=parseFloat(elem.style.opacity);
        if(!((val+=0.05)>1))
        {
            elem.style.opacity=val;
            requestAnimationFrame(cambiar);
        }
    })();
}

