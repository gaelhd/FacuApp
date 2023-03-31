// Función para guardar los datos de registro en el objeto de almacenamiento de índice
function saveData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var data = { name: name, email: email, password: password };
  
    // Abre la base de datos o la crea si no existe
    var request = indexedDB.open("registro", 1);
  
    // Crea la tabla para almacenar los datos si no existe
    request.onupgradeneeded = function(event) {
      var db = event.target.result;
      var objectStore = db.createObjectStore("users", { keyPath: "email" });
      objectStore.createIndex("name", "name", { unique: false });
    };
  
    // Guarda los datos en la tabla
    request.onsuccess = function(event) {
      var db = event.target.result;
      var transaction = db.transaction(["users"], "readwrite");
      var objectStore = transaction.objectStore("users");
      var addUser = objectStore.add(data);
  
      addUser.onsuccess = function(event) {
        alert("Registro exitoso");
        window.location.replace("Ingresar.html");
      };
  
      addUser.onerror = function(event) {
        alert("El usuario ya existe en la base de datos");
      };
    };
  }
  
  // Función para recuperar los datos de inicio de sesión del objeto de almacenamiento de índice
  function retrieveData() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
  
    // Abre la base de datos o la crea si no existe
    var request = indexedDB.open("registro", 1);
  
    // Recupera los datos del usuario de la tabla
    request.onsuccess = function(event) {
      var db = event.target.result;
      var transaction = db.transaction(["users"], "readonly");
      var objectStore = transaction.objectStore("users");
      var getUser = objectStore.get(email);
  
      getUser.onsuccess = function(event) {
        var user = event.target.result;
        if (user && user.password == password) {
          alert("Bienvenido, " + user.name + "!"); 
            window.location.replace("home.html");
            //LOCAL STORAGE
            localStorage.setItem("nombre",user.name);
            localStorage.setItem("correo",email);
        } else {
          alert("Credenciales inválidas");
        }
      };
  
      getUser.onerror = function(event) {
        alert("Usuario no encontrado");
      };
    };
  }

  function openHorario(){
    window.location.replace("horario.html");
  }