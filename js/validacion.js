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

document.getElementById('regBtn').addEventListener('click', function() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    if (nombre === "" || apellido === "" || email === "") {
        showAlertError();}
        
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    if (password1 === password2 && tos() && verificarLongitud()) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
});