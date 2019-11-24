$(document).ready(function (){
    $("#envioCorreo").click(function (){
        //Imlementar vali8daciones
        var email = $("#fp_email").val();
        alert(email);
        if(email.indexOf('@',0) == -1 || email.indexOf('.',0)==-1){
            alert('El correo electronico introducido no es correcto!!');
            return false;
        }
        alert('El email introducido es correcto');
    });
    $('#fp_email').change(function (){
        var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9-]{2,4})+$/;
        var email = this.value;
        if(emailRegex.test(email))
            this.style.backgroundColor = "";
                else
            this.style.backgroundColor = "LightPink";
    });
});