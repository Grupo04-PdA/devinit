const { response } = require("express")

function cadastroPerguntas() {
    const url = "http://localhost:3020/pergunta"
    const textarea = document.getElementById("campo-perguntar")
    const pergunta = textarea.value

    const select = document.getElementById("select-perguntar")
    const categoriaNome = select.value

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pergunta, categoriaNome
        })
    })
        .then(res => res.json())
        .then(res => {
            if (res.message) {
                console.log("pergunta cadastrada com sucesso!")

            } else {
                console.log("Ocorreu um erro!")
            }
        })
}