// const btnEnvResp = document.getElementsByClassName("btn-env-resp")
// btnEnvResp.addEventListener("click", criarResposta())

function criarResposta() {
    console.log("cliquei no botao enviar")
    const idUsuario = localStorage.getItem("user_id");
    const url = `http://localhost:3020/resposta/${idUsuario}`

    const idPergunta = localStorage.getItem("id_pergunta")

    const inputResp = document.getElementsByClassName("input-resp")
    const resposta = inputResp.value
    console.log(resposta)
    try {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                resposta, idPergunta
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.message) {
                    console.log("Resposta cadastrada com sucesso!")
                } else {
                    console.log("Ocorreu um erro!")
                }
            })
    } catch (error) {
        console.log(error)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Carregou")
})