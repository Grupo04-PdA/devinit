import { criarResposta } from "../respostas/cadastroResposta.js";
import { editarResposta } from "../respostas/editarRespostas.js";
import { excluirResposta } from "../respostas/excluirRespostas.js";
import { editarPerguntas } from "./editarPerguntas.js";
import { excluirPergunta } from "./excluirPergunta.js";

async function puxarPerguntas() {
    var url = "http://localhost:3020/pergunta"

    await fetch(url)
        .then(res => res.json())
        .then(res => {
            const perguntas = res.perguntas;
            if (perguntas) {
                for (let i = 0; i < 10; i++) {
                    const ul = document.querySelector(".slides-list")
                    const li = document.createElement("li");
                    li.classList.add("slide")

                    const divContainer = document.createElement("div")
                    divContainer.classList.add("container-perg-resp")

                    const divPergunta = document.createElement("div")
                    divPergunta.classList.add("pergunta")

                    const divResposta = document.createElement("div")

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
                        // editarPerguntas()
                    })

                    const buttonDeletePerg = document.createElement("button");
                    buttonDeletePerg.classList.add("btn-delete-perg")
                    buttonDeletePerg.innerHTML = "<img src='img/lixeira.png'>"

                    const divName = document.createElement("div")
                    divName.innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/5087/5087579.png'>"
                    divName.classList.add("div-name-perg")

                    const h5 = document.createElement("h5")
                    h5.classList.add("link-usuario")
                    h5.innerHTML = perguntas[i].usuario.nomeDeUsuario

                    const inputPerg = document.createElement("textarea")
                    inputPerg.classList.add("pergunta-titulo")
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
                        const divRespostaUnica = document.createElement("div")
                        divRespostaUnica.classList.add("resposta-individual")

                        const buttonEditResp = document.createElement("button");
                        buttonEditResp.classList.add("btn-edit-resp")
                        buttonEditResp.innerHTML = "<img src='img/lapis.png'>"

                        const buttonDeleteResp = document.createElement("button");
                        buttonDeleteResp.classList.add("btn-delete-resp")
                        buttonDeleteResp.innerHTML = "<img src='img/lixeira.png'>"

                        const divNameResp = document.createElement("div")
                        divNameResp.classList.add("div-name-resp")

                        const divBtnResp = document.createElement("div")
                        divBtnResp.classList.add("btn-edit-delete-resp")

                        divResposta.classList.add("resposta")
                        divNameResp.innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/5087/5087579.png'>"

                        const h5Resp = document.createElement("h5")
                        h5Resp.classList.add("link-usuario")
                        h5Resp.innerHTML = "teste"

                        const inputResp = document.createElement("textarea")
                        inputResp.innerHTML = resposta.resposta
                        inputResp.classList.add("resposta-titulo")
                        inputResp.disabled = true

                        const btnEnvEditResp = document.createElement("button")
                        btnEnvEditResp.innerHTML = "Enviar"
                        btnEnvEditResp.classList.add("btn-env-edit-resp")

                        divPerg.appendChild(inputPerg)
                        divPerg.appendChild(btnEnvPerg)
                        divInput.appendChild(input)
                        divInput.appendChild(btnEnvResp)
                        const idUsuario = localStorage.getItem("user_id")
                        if (perguntas[i].usuario.idUsuario == idUsuario) {
                            divBtn.appendChild(buttonEditPerg)
                            divBtn.appendChild(buttonDeletePerg)
                        }
                        divPergunta.appendChild(divBtn)
                        divName.appendChild(h5)
                        divPergunta.appendChild(divName)
                        divPergunta.appendChild(divPerg)
                        divNameResp.appendChild(h5Resp)
                        divBtnResp.appendChild(buttonEditResp)
                        divBtnResp.appendChild(buttonDeleteResp)
                        if (idUsuario == resposta.idUsuario) {
                            divResposta.appendChild(divBtnResp)
                        }
                        divRespostaUnica.appendChild(divNameResp)
                        divRespostaUnica.appendChild(inputResp)
                        divRespostaUnica.appendChild(btnEnvEditResp)
                        divResposta.appendChild(divRespostaUnica)
                        divResposta.appendChild(divInput)
                        divContainer.appendChild(divPergunta)
                        divContainer.appendChild(divResposta)

                        li.appendChild(divContainer)
                        ul.appendChild(li)

                        divRespostaUnica.name = resposta.idResposta

                        const idResposta = localStorage.getItem("id_resposta")

                        divRespostaUnica.addEventListener("click", () => {
                            const idDaResposta = divRespostaUnica.name
                            localStorage.setItem("id_resposta", idDaResposta)
                        })

                        buttonDeleteResp.addEventListener("click", () => {
                            excluirResposta(idResposta)
                        })

                        buttonEditResp.addEventListener("click", () => {
                            inputResp.removeAttribute("disabled");
                            btnEnvEditResp.style.display = "block"
                        })

                        btnEnvEditResp.addEventListener("click", () => {
                            const resposta = inputResp.value
                            editarResposta(resposta, idResposta)
                        })
                    })

                    divPergunta.setAttribute("name", perguntas[i].idPergunta)

                    divPergunta.addEventListener("click", () => {
                        const idDaPergunta = divPergunta.getAttribute("name");
                        localStorage.setItem("id_pergunta", idDaPergunta)
                    })

                    const idPergunta = localStorage.getItem("id_pergunta")
                    buttonDeletePerg.addEventListener("click", () => {
                        excluirPergunta(idPergunta)
                    })

                    btnEnvPerg.addEventListener("click", () => {
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