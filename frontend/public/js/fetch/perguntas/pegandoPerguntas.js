import { criarResposta } from "../respostas/cadastroResposta.js";
import { editarPerguntas } from "./editarPerguntas.js";

async function puxarPerguntas() {
    var url = "http://localhost:3020/pergunta"

    await fetch(url)
        .then(res => res.json())
        .then(res => {
            const perguntas = res.perguntas;
            if (perguntas) {
                console.log(perguntas)
                for (let i = 0; i < 10; i++) {
                    const ul = document.querySelector(".slides-list")
                    const li = document.createElement("li");
                    li.classList.add("slide")

                    const divBtn = document.createElement("div")
                    divBtn.classList.add("btn-edit-delete")

                    const divPerg = document.createElement("div")
                    const btnEnvPerg = document.createElement("button")
                    btnEnvPerg.innerHTML = "Enviar"
                    btnEnvPerg.classList.add("btn-env-edit-perg")

                    const buttonEditPerg = document.createElement("button");
                    buttonEditPerg.classList.add("btn-edit-perg")
                    buttonEditPerg.innerHTML = "<img src='img/lapis.png'>"
                    buttonEditPerg.addEventListener("click", () => {
                        inputPerg.removeAttribute("disabled");
                        btnEnvPerg.style.display = "block"
                        console.log("deu certo!!")
                        // editarPerguntas()
                    })

                    const buttonDeletePerg = document.createElement("button");
                    buttonDeletePerg.classList.add("btn-delete-perg")
                    buttonDeletePerg.innerHTML = "<img src='img/lixeira.png'>"

                    const div = document.createElement("div")
                    div.classList.add("pergunta")

                    const divName = document.createElement("div")
                    divName.innerHTML = "<img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg' height='13rem' style='margin: 0.5rem;'>"

                    const a = document.createElement("a")
                    a.classList.add("link-usuario")
                    a.innerHTML = perguntas[i].usuario.nomeDeUsuario

                    const inputPerg = document.createElement("textarea")
                    inputPerg.classList.add("pergunta-titulo")
                    //inputPerg.setAttribute("value", perguntas[i].pergunta)
                    inputPerg.innerHTML = perguntas[i].pergunta
                    inputPerg.disabled = true

                    const divInput = document.createElement("div")
                    divInput.classList.add("div-input-resp")
                    divInput.setAttribute("id", "div-input")

                    const input = document.createElement("input")
                    input.classList.add(`input-resp${perguntas[i].idPergunta}`)
                    input.setAttribute("placeholder", "Digite aqui a sua resposta...")

                    const btnEnvResp = document.createElement("button")
                    btnEnvResp.classList.add("btn-env-resp")
                    btnEnvResp.innerHTML = "<img src='img/enviar.png'>"
                    btnEnvResp.setAttribute("type", "submit")
                    btnEnvResp.addEventListener("click", () => { criarResposta() })

                    perguntas[i].respostas.map(resposta => {
                        const divResposta = document.createElement("div")
                        divResposta.classList.add("resposta")
                        divResposta.innerHTML = "<img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg' height='13rem' style='margin: 0.5rem;'>"

                        const aResp = document.createElement("a")
                        aResp.classList.add("link-usuario")
                        aResp.innerHTML = "teste"

                        const h6 = document.createElement("h6")
                        h6.innerHTML = resposta.resposta

                        const divRespJunto = document.createElement("div")
                        divRespJunto.classList.add("divRespJunto")

                        console.log(resposta.resposta)

                        divPerg.appendChild(inputPerg)
                        divPerg.appendChild(btnEnvPerg)
                        divInput.appendChild(input)
                        divInput.appendChild(btnEnvResp)
                        const idUsuario = localStorage.getItem("user_id")
                        if (perguntas[i].usuario.idUsuario == idUsuario) {
                            divBtn.appendChild(buttonEditPerg)
                            divBtn.appendChild(buttonDeletePerg)
                        }
                        div.appendChild(divBtn)
                        divName.appendChild(a)
                        div.appendChild(divName)
                        div.appendChild(divPerg)
                        divResposta.appendChild(aResp)
                        divResposta.appendChild(h6)
                        divRespJunto.appendChild(divResposta)
                        div.appendChild(divRespJunto)
                        div.appendChild(divInput)
                        li.appendChild(div)
                        ul.appendChild(li)
                    })

                    li.setAttribute("name", perguntas[i].idPergunta)

                    li.addEventListener("click", () => {
                        const idDaPergunta = li.getAttribute("name");
                        localStorage.setItem("id_pergunta", idDaPergunta)
                    })

                    btnEnvPerg.addEventListener("click", () => {
                        const idPergunta = localStorage.getItem("id_pergunta")
                        const pergunta = inputPerg.value
                        editarPerguntas(pergunta, idPergunta)
                    })
                }
            } else {
                const slide = document.querySelector(".div-perguntas")
                slide.style.display = "none"
            }
        })
}

document.addEventListener("DOMContentLoaded", () => {
    puxarPerguntas()

})