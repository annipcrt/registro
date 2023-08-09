function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
function tos() {
    return document.getElementById("terminos").checked;
}

function verificarLongitud() {
    const clave = document.getElementById("password1").value;
    return clave.length >= 6;
}


function vertificarCampos(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    return !(nombre === "" || apellido === "" || email === "") 
         }
document.getElementById('regBtn').addEventListener('click', function() {

        
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    if (password1 === password2 && tos() && verificarLongitud() && vertificarCampos()) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
});