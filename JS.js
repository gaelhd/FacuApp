
function Registrar(){
/* Captura de datos del login a localStorage */
    var Correo = document.getElementById('correoReg').value;
    var Contra = document.getElementById('contraReg').value;
    var Nombre = document.getElementById('nombreReg').value;

/* Guardar los datos en localStorage */

    localStorage.setItem("Correo",Correo);
    localStorage.setItem("Contra",Contra);
    localStorage.setItem("Nombre",Nombre)

/* Obtención de datos almacenados */
    let correo = localStorage.getItem("Correo");
    let contra = localStorage.getItem("Contra");
    let nombre = localStorage.getItem("Nombre");

/* CONDICION PARA AVISAR SI SE REGISTRO CORRECTAMENTE*/
if(correo !== "" || contra !== "" || nombre !== "" ){
    alert('Se agrego correctamente tu usuario, presione INGRESAR');
}else{
    alert('Complete los datos antes de REGISTRAR')
}
    }
