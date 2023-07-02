//TODO Toma de los elementos mediante la clase
const elementos=document.querySelectorAll('.validar');

//TODO Aca se agregan las expresiones regulares, se hace en una lista y se coloca como propiedad el id de los elementos
const expresionesRegulares = {
    des_cat: /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/i,
    nom_cat: /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/i,
    est_cat: /A|I/,
    fky_fan_pag: /[0-9]+/,
    fky_cat: /[0-9]+/,
    des_con: /([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)|(((?:https\:\/\/)|(?:http\:\/\/)|(?:www\.))?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\??)[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~]+))|(^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$)/i,
    fky_tip_con: /[0-9]+/,
    fky_fan_pag: /[0-9]+/,
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
    fky_fan_pag: /[0-9]+/,
    est_pub: /A|P/,
    est_seg: /A|I/


};

//TODO en esta funcion se valida el contenido de los campos con respecto a las expresionesRegulares
const validarCampo=(campo,valor,expresionesRegular)=>{
    const valido=expresionesRegular.test(valor);
    campo.classList.toggle("casilla",!valido);
    campo.classList.toggle("is-valid", valido); //*Si valido es true, se agrega "is-valid" a la clase del elemento
    campo.classList.toggle("is-invalid", !valido); //*Si valido es false, se agrega "is-invalid" a la clase del elemento
    campo.classList.toggle("invalida", !valido); //*Si valido es false, se agrega "invalida" a la clase del elemento
    campo.nextElementSibling.classList.toggle("invalid-feedback", !valido); //*Si valido es false, se agrega "invalid-feedback" a la clase del siguiente elemento
    campo.nextElementSibling.innerText = valido ? " " : `Introduzca un valor válido`; //*Dependiendo del valor de valido, de agregará el primer valor para true o el 2do para false
};

//TODO Aca es donde se ejecuta todo
elementos.forEach(elemento=>{
    elemento.addEventListener('blur',(evento)=>{
        const campo=evento.target;
        const valor=campo.value;
        const id=campo.id;
        const Regexp=expresionesRegulares[id];
        if(valor.length===0){
            campo.classList.remove("is-valid");
            campo.classList.remove("casilla");
            campo.classList.add("is-invalid");
            campo.classList.add("invalida");
            campo.nextElementSibling.classList.add("invalid-feedback");
            campo.nextElementSibling.innerText = "No puede dejarlo vacío";
        }else{
            validarCampo(campo,valor,Regexp);
        }
        })
    });

