export async function criarResposta() {
    const idPergunta = localStorage.getItem("id_pergunta")
    const idUsuario = localStorage.getItem("user_id");
    const url = `http://localhost:3020/resposta/${idUsuario}`

    const inputResp = document.querySelector(`.input-resp${idPergunta}`)
    const resposta = inputResp.value
    try {
        await fetch(url, {
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
                if (res.Message) {
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