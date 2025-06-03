function validarUsuario() {
  var nombre = document.getElementById("usuario").value;
  var clave = document.getElementById("clave").value;

  if (nombre == "eduardo" && clave == "123") {
    window.location.href = "./anexo.html";

    } else {
        alert("Usuario o contraseña inválidos");
    }
}
