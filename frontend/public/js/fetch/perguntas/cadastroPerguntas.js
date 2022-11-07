function openModalPerg() {
    let modal = document.querySelector('.modal-perguntar')
    modal.style.display = 'block';
}

function openModalErro() {
    let modalErro = document.querySelector('.modal-erro-pergunta')
    modalErro.style.display = 'block';
}

function fecharModalErro() {
    let modalErro = document.querySelector('.modal-erro-pergunta')
    modalErro.style.display = 'none';
}

function cadastroPerguntas() {
    const idUsuario = localStorage.getItem("user_id");
    const url = `http://localhost:3020/pergunta/${idUsuario}`
    const textarea = document.getElementById("campo-perguntar")
    const pergunta = textarea.value

    const select = document.getElementById("select-perguntar")
    const idCategoria = select.value;

    try {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pergunta, idCategoria
        })
    })
        .then(res => res.json())
        .then(res => {
            if (res.message) {
                console.log("pergunta cadastrada com sucesso!")
                openModalPerg()
            } else {
                console.log("Ocorreu um erro!")
                openModalErro()
            }
        })
    } catch(error) {
        openModalErro()
    }
}