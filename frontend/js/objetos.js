class fanPage{
    #nombre;
    #descripcion;
    #foto;
    #fecha;
    #estatus
    constructor(nombre,descripcion,foto,fecha,estatus){
        this.#nombre=nombre;
        this.#descripcion=descripcion;
        this.#foto=foto;
        this.#fecha=fecha;
        this.#estatus=estatus;
    }
    consultar(){
        let estatus=this.#estatus;
        let salida=`<center><img src="../Imagen/${this.#foto}" class="logo-personal" alt="Logo"><br> La Fan Page '${this.#nombre}' cuya descripción es:<br> '${this.#descripcion}'<br> Fue actualizada el ${this.#fecha} y su estatus es `;
        if(estatus=='A'){
            salida+='Activa</center>';
        }else{
            salida+='Inactiva</center>';
        };
        document.write(salida);
    }
}

const fanPage1=new fanPage('OXXO','Ésta es la página oficial de OXXO. Aquí podrás enterarte de promociones, descuentos y nuevos productos. Te invitamos a consultar las políticas de uso.','oxxo.png','10/02/77','A');
fanPage1.consultar();