export function editarPerguntas(pergunta, id) {
    const url = `http://localhost:3020/pergunta/${id}`
    fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            pergunta
        })
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.message) {
                console.log("Pergunta editada com sucesso!")
            } else {
                console.log(res)
            }
        })
}
