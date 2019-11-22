$(document).ready(function () {
    $("#login").click(function () {

        var user = $("#user").val();
        var clave = $("#clave").val();
        //Verificando campos vacíos
        if (user == '' || clave == '') {
            alert("Por favor complete los campos...!!!");
        }
        if (clave.length > 5){
            alert("Tamaño maximo permitido es 5 caracteres");
            return false;
        }
    });
});