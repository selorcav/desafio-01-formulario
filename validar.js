function validar(){
    var nombre
    nombre = document.getElementById("nombre").value;  

    if (nombre === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30){
        alert("Tu nombre supera la cantidad de caracteres");
        return false;
    }

    var apellidos
    apellidos = document.getElementById("apellidos").value;  

    if (apellidos === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (apellidos.length>80){
        alert("Tus apellidos superan cantidad de caracteres");
        return false;
    }

    var correo 
    correo = document.getElementById("correo").value;

    var arroba = correo.indexOf("@");
    var punto = correo.lastIndexOf(".");

    if (correo === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (arroba < 0){
        alert("Ingrese correo válido");
        return false;
    }
    else if (arroba+2 > punto){
        alert("Ingrese correo válido");
        return false;
    }
    else if (punto >= correo.length-1 ){
        alert("Ingrese correo válido");
        return false;
    }
    else if (correo.length>80){
        alert("Tu correo supera cantidad de caracteres");
        return false;
    }

    var usuario
    usuario = document.getElementById("usuario").value;  

    if (usuario === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (usuario.length>20){
        alert("Tu nombre de usuario supera la cantidad de caracteres");
        return false;
    }

    var pass
    pass = document.getElementById("pass").value;  

    if (usuario === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }

    var telefono
    telefono = document.getElementById("telefono").value;  

    if (usuario === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (telefono.length>15){
        alert("Tu número de teléfono cantidad de caracteres");
        return false;
    }

    saludo = 'Bienvenid@ ' + nombre + ' ' + apellidos + '.' + '\n Tu nombre de usuario es ' + usuario + ' y tu password es ' + pass + '.'

    alert(saludo);
}
