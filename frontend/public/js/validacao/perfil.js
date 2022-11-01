var perguntas = window.document.getElementById('pergunta')
var respostas = window.document.getElementById('resposta')
var resultados = window.document.getElementById('a')
perguntas.addEventListener('click', clicar)
respostas.addEventListener('click', clique)
function clicar() {
  resultados.innerHTML = "<ul class='slides-list-perfil'>  <li class='slide'><div class='pergunta'> <img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg'  height='30rem' style='margin: 0.5rem;'> <a href='/perfil' class='link-usuario' href='/perfil'>User412938 </a> <h3 class='pergunta'> <b>O que é Node.js</b> </h3> <div class='resposta'><img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg' height='20rem' style='margin: 0.5rem;'><a href='/perfil' class='link-usuario' style='font-size: 0.7rem;'>User21123</a>  <h6 style='padding: 1rem;'><strong>Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. </strong> </h6> </div> </li> </ul>"
}


function clique() {
  resultados.innerHTML = "<ul class='slides-list-perfil'> <li class='slide'> <div class='pergunta'><img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg' height='30re' style='margin: 0.5rem;'><a href='/perfil' class='link-usuario'>User412938</a><h3 class='pergunta'> <b>O que é JavaScript?</b></h3><div class='resposta'> <img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg' height='20rem' style='margin: 0.5rem;'><a href='/perfil' class='link-usuario' style='font-size: 0.7rem;'>User21123</a> <h6 style='padding: 1rem;'><strong>JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc.</strong></h6> </div> </li> <li class='slide'><div class='pergunta'> <img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg'  height='30rem' style='margin: 0.5rem;'> <a href='/perfil' class='link-usuario' href='/perfil'>User412938 </a> <h3 class='pergunta'> <b>O que é Node.js</b> </h3> <div class='resposta'><img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg' height='20rem' style='margin: 0.5rem;'><a href='/perfil' class='link-usuario' style='font-size: 0.7rem;'>User21123</a>  <h6 style='padding: 1rem;'><strong>Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. </strong> </h6> </div> </li> </ul>"

}

var modal = document.getElementById("editPerfil");

var btn = document.getElementById("button");

var span = document.getElementsByClassName("fechar")[0];

var editButton = document.getElementById("editButton")

var input = document.getElementById("input")

// editButton.onclick = function() {

// }

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