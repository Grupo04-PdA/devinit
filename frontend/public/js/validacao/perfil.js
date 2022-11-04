var modal = document.getElementById("editPerfil");

var btn = document.getElementById("button");

var span = document.getElementsByClassName("fechar")[0];

var editButton = document.getElementById("editButton")

var input = document.getElementById("input")

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Puxando nome do banco de dados 
const nomeUsuario = document.querySelector(".nome-usuario");
const usuario = localStorage.getItem("user_nome")
const strong = document.createElement("strong")
strong.innerHTML = usuario
nomeUsuario.appendChild(strong)