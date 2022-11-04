import { criarResposta } from "../respostas/cadastroResposta.js";

var perguntas = document.getElementById('pergunta')
var respostas = document.getElementById('resposta')
var resultados = document.getElementById('a')
perguntas.addEventListener('click', clickPergunta());
//respostas.addEventListener('click', clickResposta)

function clickPergunta() {
    var id = localStorage.getItem("user_id")
    var url = `http://localhost:3020/perguntasUsuario/${id}`

    fetch(url)
        .then(res => res.json())
        .then(res => {
            const perguntas = res.Perguntas;

            if (perguntas) {
                perguntas.perguntas.map(pergunta => {

                    const ul = document.createElement("ul");
                    ul.classList.add("slides-list-perfil")
                    const li = document.createElement("li");
                    li.classList.add("slide")

                    const divBtn = document.createElement("div")
                    divBtn.classList.add("btn-edit-delete")

                    const buttonEditPerg = document.createElement("button");
                    buttonEditPerg.classList.add("btn-edit-perg")
                    buttonEditPerg.innerHTML = "<img src='img/lapis.png'>"

                    const buttonDeletePerg = document.createElement("button");
                    buttonDeletePerg.classList.add("btn-delete-perg")
                    buttonDeletePerg.innerHTML = "<img src='img/lixeira.png'>"

                    const div = document.createElement("div")
                    div.classList.add("pergunta")
                    div.innerHTML = "<img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg' height='13rem' style='margin: 0.5rem;'>"

                    const a = document.createElement("a")
                    a.classList.add("link-usuario")
                    a.innerHTML = perguntas.nomeDeUsuario

                    const h3 = document.createElement("h3")
                    h3.classList.add("pergunta-titulo")

                    const b = document.createElement("b")
                    b.innerHTML = pergunta.pergunta

                    const divInput = document.createElement("div")
                    divInput.classList.add("div-input-resp")
                    divInput.setAttribute("id", "div-input")

                    const input = document.createElement("input")
                    input.classList.add(`input-resp${pergunta.idPergunta}`)
                    input.setAttribute("placeholder", "Digite aqui a sua resposta...")

                    const btnEnvResp = document.createElement("button")
                    btnEnvResp.classList.add("btn-env-resp")
                    btnEnvResp.innerHTML = "<img src='img/enviar.png'>"
                    btnEnvResp.setAttribute("type", "submit")
                    btnEnvResp.addEventListener("click", () => { criarResposta() })

                    divInput.appendChild(input)
                    divInput.appendChild(btnEnvResp)
                    divBtn.appendChild(buttonEditPerg)
                    divBtn.appendChild(buttonDeletePerg)
                    h3.appendChild(b)
                    div.appendChild(divBtn)
                    div.appendChild(a)
                    div.appendChild(h3)
                    div.appendChild(divInput)
                    li.appendChild(div)
                    ul.appendChild(li)
                    resultados.appendChild(ul)

                    li.setAttribute("name", pergunta.idPergunta)

                    li.addEventListener("click", () => {
                        const idDaPergunta = li.getAttribute("name");
                        localStorage.setItem("id_pergunta", idDaPergunta)
                    })
                })
            } else {
                const slide = document.querySelector(".div-perguntas")
                slide.style.display = "none"
            }
        })
}

document.addEventListener("DOMContentLoaded", () => {

})