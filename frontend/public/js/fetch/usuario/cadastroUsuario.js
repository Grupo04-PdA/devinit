function cadastrar() {
    const inputNome = document.getElementById("nome_form")
    const nome = inputNome.value;

    const inputEmail = document.getElementById("email_cadastro")
    const email = inputEmail.value;

    const inputSenha = document.getElementById("confirm_senha")
    const senha = inputSenha.value;

    const url = "http://localhost:3020/usuario"
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
            logado: 1
        })
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.Usuario) {
                console.log("Cadastrou!")
                abrirModal()
            } else {
                console.log("Ocorreu um erro!")
            }
        });

}

function abrirModal() {
    const modal = document.querySelector(".modal-cadastrado")
    const content = document.querySelector(".content")

    content.style.display = "none";
    modal.style.display = "block";
}

function fecharmodal() {
    window.location.href = "http://localhost:4020/homecadastrado"
}
document.addEventListener("DOMContentLoaded", () => {
    console.log("esta funcionando")
})