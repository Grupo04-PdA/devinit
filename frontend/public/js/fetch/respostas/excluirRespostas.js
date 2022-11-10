export function excluirResposta(id) {
    const url = `http://localhost:3020/resposta/${id}`
    fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.message) {
                console.log("Pergunta excluída com sucesso!")
            } else {
                console.log(res)
            }
        })
}