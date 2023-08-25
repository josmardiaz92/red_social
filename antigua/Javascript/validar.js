//TODO solo se validan campos que se ingresen por el usuario. los de seleccion multiple no necesitan validacion.
//TODO en este array, debe agregarse la expresion regular necesario para cada espacio a validar con su id
const expresionesRegulares = {
    des_cat: /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/i,
    nom_cat: /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/i,
    des_con: /([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)|(((?:https\:\/\/)|(?:http\:\/\/)|(?:www\.))?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\??)[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~]+))|(^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$)/i,
    nom_fan_pag: /^[A-Za-zÀ-ÖØ-öø-ÿ\s',0-9]+$/i,
    des_fan_pag: /([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)|(((?:https\:\/\/)|(?:http\:\/\/)|(?:www\.))?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\??)[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~]+))|(^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$)/i,
    per_fan_pag: /^.*\.(png|jpg|jpeg|svg)$/i,
    url_mul: /^.*\.(png|jpg|jpeg|svg|mp4|mov|avi|webm)$/i,
    tit_pub: /([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)|(((?:https\:\/\/)|(?:http\:\/\/)|(?:www\.))?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\??)[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~]+))|(^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$)/i,
    des_pub: /([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)|(((?:https\:\/\/)|(?:http\:\/\/)|(?:www\.))?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\??)[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~]+))|(^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$)/i,
};

//TODO Aca tomamos todos los elementos a usar
const btnSubmit = document.getElementById("submitformulario");
const elementos=document.querySelectorAll('.validar');
const instanciasValidar=[];
const alerta=document.getElementById('alerta');
const textoAlerta=document.getElementById('textoAlerta');
const alerta2=document.getElementById('alerta2');
const textoAlerta2=document.getElementById('textoAlerta2');
const alerta3=document.getElementById('alerta3');
const textoAlerta3=document.getElementById('textoAlerta3');
class validacion{
    constructor(id,nombre,valorOk,regex){
        this.id=id;
        this.nombre=nombre;
        this.valorOk=valorOk;
        this.regex=regex;
    }
    mostrar(){
        let informacion=`${this.id} ${this.nombre} ${this.valorOk} ${this.regex}`;
        console.log(informacion)
    }
    validar(){
        const campo=document.getElementById(this.id);
        campo.addEventListener('blur',evento=>{
            const campo=evento.target;
            const valor=campo.value;
            const valido=this.regex.test(valor);
            const texto2=`El campo ${this.nombre} no es valido\nTome en cuenta lo siguiente:\n ${this.valorOk}`;
            const texto3=`El campo ${this.nombre} es valido`;
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
            const casillasInvalidas=document.querySelectorAll('.is-invalid').length;
            if(casillasInvalidas>0){
                btnSubmit.disabled=true;
            }else{
                btnSubmit.disabled=false;
            }
        })
    }
}

elementos.forEach((elemento,index)=>{
    const id=elemento.id;
    const nombre=elemento.placeholder; //todo este sera el nombre entendible del camo, ejemplo... en vez de nom_cat, aca toma el placeholder para que diga nombre de la categoria.
    const valorOk=elemento.title; //todo este sera la referencia de como llenar adecuadamente el campo, eso se colocará en el title
    const regex=expresionesRegulares[id];
    const nuevaInstancia=new validacion(id,nombre,valorOk,regex);
    instanciasValidar.push(nuevaInstancia);
    nuevaInstancia.validar()
})

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