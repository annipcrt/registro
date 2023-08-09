function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function tos() {
    return document.getElementById("terminos").checked;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("regBtn").addEventListener("click",e => {
        if(tos())
            showAlertSuccess();
        else
            showAlertError();
    });
});