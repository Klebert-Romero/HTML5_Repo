$(document).ready(function(){
    $("#enviar").click(function(){
        var clave = $("#contraseña").val();
        var mes = $("#mes").val();
        var genero = $("#genero").val();
        var telefono = $("#telefono").val();
        if(clave.length < 6){
            alert("La clave deberia tener mínimo 6 cracteres");
            return false;
        }
        if(mes == ''){
            alert("Seleccione mes váido");
            return false;
        }
        if(genero == ''){
            alert("Seleccione genero");
            return false;
        }
        if(telefono.length < 8){
            alert("Ingrese de celular numero valido");
            return false;
        }
        alert ("Validaciones OK");
    });
});