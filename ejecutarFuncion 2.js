window.onload = function mostrar(){
    var nombreLS = localStorage.getItem("nombre");
    document.getElementById("mostrar").innerHTML = nombreLS;    
    console.log('Se ingreso nombre correctamente');

}