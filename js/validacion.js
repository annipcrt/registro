function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
function tos() {
    return document.getElementById("terminos").checked;
}

document.getElementById('regBtn').addEventListener('click', function() {
    if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "" || !terminos) {
        showAlertError();}
        
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    if (password1 === password2 && tos()) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
});