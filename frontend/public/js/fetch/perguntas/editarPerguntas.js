export function editarPerguntas() {
        fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                pergunta
            })
        })
            .then(res => res.json())
            .then(res => {

                if (res.message) {
                    console.log("Cadastrou!")
                } else {
                    console.log(res)
                }
            })
}
