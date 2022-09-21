function puxarPerguntas() {
    var url = "http://localhost:3020/pergunta"

    fetch(url)
        .then(res => res.json())
        .then(res => {
            const perguntas = res.perguntas;
            for (let i = 0; i < 4; i++) {
                const ul = document.querySelector(".slides-list")
                const li = document.createElement("li");
                li.classList.add("slide")

                const div = document.createElement("div")
                div.classList.add("pergunta")
                div.innerHTML = "<img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg' height='13rem' style='margin: 0.5rem;'>"

                const a = document.createElement("a")
                a.classList.add("link-usuario")
                a.innerHTML = "User412938"

                const h3 = document.createElement("h3")
                h3.classList.add("pergunta")

                const b = document.createElement("b")
                b.innerHTML = perguntas[i].pergunta

                const input = document.createElement("input")
                input.classList.add("input-resp")
                input.setAttribute("placeholder", "Digite aqui a sua resposta...")

                h3.appendChild(b)
                div.appendChild(a)
                div.appendChild(h3)
                div.appendChild(input)
                li.appendChild(div)
                ul.appendChild(li)
            }

        })
}

document.addEventListener("DOMContentLoaded", puxarPerguntas())