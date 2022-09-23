function abrirFundo() {
    const fundo = document.querySelector(".fundo-pergunta-pesq")
    fundo.style.display = 'block'
}

function abrirTitulo() {
    const titulo = document.querySelector(".titulo-pesq")
    titulo.style.display = "block";
}

async function pesquisaPergunta() {
    const inputPesquisa = document.querySelector('#txt-busca')

    const pesquisa = inputPesquisa.value

    const url = "http://localhost:3020/busca"
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pesquisa
        })
    })
        .then(res => res.json())
        .then(res => {
            if (res.perguntas) {
                const perguntas = res.perguntas;
                abrirTitulo()
                abrirFundo()
                perguntas.map(pergunta => {
                    console.log(pergunta.pergunta)

                    const ul = document.querySelector(".lista-pesquisa")
                    const li = document.createElement("li");

                    const div = document.createElement("div")
                    div.classList.add("pergunta-pesq")
                    div.innerHTML = "<img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg' height='13rem' style='margin: 0.5rem;'>"

                    const a = document.createElement("a")
                    a.classList.add("link-usuario")
                    a.innerHTML = "User412938"

                    const h3 = document.createElement("h3")
                    h3.classList.add("h3-pesq")

                    const b = document.createElement("b")
                    b.innerHTML = pergunta.pergunta

                    const input = document.createElement("input")
                    input.classList.add("input-resp")
                    input.setAttribute("placeholder", "Digite aqui a sua resposta...")

                    h3.appendChild(b)
                    div.appendChild(a)
                    div.appendChild(h3)
                    div.appendChild(input)
                    li.appendChild(div)
                    ul.appendChild(li)

                })
            } else {
                abrirFundo()
                const div = document.querySelector(".fundo-pergunta-pesq")
                const h1 = document.createElement("h1")
                h1.innerHTML = res.message
                h1.classList.add("msg-erro")

                div.appendChild(h1)
            }
        })
}

async function pesquisaPerguntaHome() {
    window.location.href = "http://locahost:4020/pesquisa"
    const inputPesquisa = document.querySelector('#txt-busca');
    inputPesquisa.setAttribute("placeholder", pesquisa)
    const inputHome = document.querySelector('.txt-pesquisar')

    const pesquisa = inputHome.value

    const url = "http://localhost:3020/busca"
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pesquisa
        })
    })
        .then(res => res.json())
        .then(res => {
            if (res.perguntas) {
                const perguntas = res.perguntas;
                abrirTitulo()
                abrirFundo()
                perguntas.map(pergunta => {
                    console.log(pergunta.pergunta)

                    const ul = document.querySelector(".lista-pesquisa")
                    const li = document.createElement("li");

                    const div = document.createElement("div")
                    div.classList.add("pergunta-pesq")
                    div.innerHTML = "<img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg' height='13rem' style='margin: 0.5rem;'>"

                    const a = document.createElement("a")
                    a.classList.add("link-usuario")
                    a.innerHTML = "User412938"

                    const h3 = document.createElement("h3")
                    h3.classList.add("h3-pesq")

                    const b = document.createElement("b")
                    b.innerHTML = pergunta.pergunta

                    const input = document.createElement("input")
                    input.classList.add("input-resp")
                    input.setAttribute("placeholder", "Digite aqui a sua resposta...")

                    h3.appendChild(b)
                    div.appendChild(a)
                    div.appendChild(h3)
                    div.appendChild(input)
                    li.appendChild(div)
                    ul.appendChild(li)

                })
            } else {
                abrirFundo()
                const div = document.querySelector(".fundo-pergunta-pesq")
                const h1 = document.createElement("h1")
                h1.innerHTML = res.message
                h1.classList.add("msg-erro")

                div.appendChild(h1)
            }
        })
}

async function pesquisaPerguntaPerf() {
    const inputPesquisa = document.querySelector('#txt-busca')

    const pesquisa = inputPesquisa.value

    const url = "http://localhost:3020/busca"
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pesquisa
        })
    })
        .then(res => res.json())
        .then(res => {
            if (res.perguntas) {
                const perguntas = res.perguntas;
                abrirTitulo()
                abrirFundo()
                perguntas.map(pergunta => {
                    console.log(pergunta.pergunta)

                    const ul = document.querySelector(".lista-pesquisa")
                    const li = document.createElement("li");

                    const div = document.createElement("div")
                    div.classList.add("pergunta-pesq")
                    div.innerHTML = "<img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg' height='13rem' style='margin: 0.5rem;'>"

                    const a = document.createElement("a")
                    a.classList.add("link-usuario")
                    a.innerHTML = "User412938"

                    const h3 = document.createElement("h3")
                    h3.classList.add("h3-pesq")

                    const b = document.createElement("b")
                    b.innerHTML = pergunta.pergunta

                    const input = document.createElement("input")
                    input.classList.add("input-resp")
                    input.setAttribute("placeholder", "Digite aqui a sua resposta...")

                    h3.appendChild(b)
                    div.appendChild(a)
                    div.appendChild(h3)
                    div.appendChild(input)
                    li.appendChild(div)
                    ul.appendChild(li)

                })
            } else {
                abrirFundo()
                const div = document.querySelector(".fundo-pergunta-pesq")
                const h1 = document.createElement("h1")
                h1.innerHTML = res.message
                h1.classList.add("msg-erro")

                div.appendChild(h1)
            }
        })
}