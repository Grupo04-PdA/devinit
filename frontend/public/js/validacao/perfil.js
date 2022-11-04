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