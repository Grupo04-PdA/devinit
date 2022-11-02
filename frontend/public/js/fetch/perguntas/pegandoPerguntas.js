function puxarPerguntas() {
    var url = "http://localhost:3020/pergunta"

    fetch(url)
        .then(res => res.json())
        .then(res => {
            const perguntas = res.perguntas;

            if (perguntas) {
                for (let i = 0; i < 4; i++) {
                    const ul = document.querySelector(".slides-list")
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
                    a.innerHTML = "User412938"

                    const h3 = document.createElement("h3")
                    h3.classList.add("pergunta-titulo")

                    const b = document.createElement("b")
                    b.innerHTML = perguntas[i].pergunta

                    const divInput = document.createElement("div")
                    divInput.classList.add("div-input-resp")

                    const input = document.createElement("input")
                    input.classList.add("input-resp")
                    input.setAttribute("placeholder", "Digite aqui a sua resposta...")
                    
                    const btnEnvResp = document.createElement("button")
                    btnEnvResp.classList.add("btn-env-resp")
                    btnEnvResp.innerHTML = "<img src='img/enviar.png'>"
                    btnEnvResp.setAttribute("type", "submit")

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

                    li.setAttribute("name", perguntas[i].idPergunta)

                    li.addEventListener("click", () => {
                        const idDaPergunta = li.getAttribute("name");
                        localStorage.setItem("id_pergunta", idDaPergunta)
                    })
                }
            } else {
                const slide = document.querySelector(".div-perguntas")
                slide.style.display = "none"
            }
        })
}

document.addEventListener("DOMContentLoaded", puxarPerguntas())