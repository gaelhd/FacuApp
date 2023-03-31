window.onload = function mostrar(){
    var nombreLS = localStorage.getItem("nombre");
    document.getElementById("mostrar").innerHTML = nombreLS;    
    console.log('Se ingreso nombre correctamente');
    var correoLS = localStorage.getItem("correo");
    document.getElementById("correoLabel").innerHTML = correoLS;
    console.log('Se ingreso correo correctamente');
}
function salirUser(){
    alert('Adios :D');
    localStorage.clear();
    window.location.replace("index.html");
    
}