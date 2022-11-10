export function editarResposta(resposta, id) {
    const url = `http://localhost:3020/resposta/${id}`
    fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            resposta
        })
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.message) {
                console.log("Resposta editada com sucesso!")
            } else {
                console.log(res)
            }
        })
}
