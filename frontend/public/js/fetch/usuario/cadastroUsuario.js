function cadastrar() {
    const inputNome = document.getElementById("nome_form")
    const nome = inputNome.value;

    const inputNomeUsuario = document.getElementById("nome_Usuario")
    const nomeDeUsuario = inputNomeUsuario.value;
    console.log(nomeDeUsuario)

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
            nomeDeUsuario: nomeDeUsuario,
            email: email,
            senha: senha,
        })
    })
        .then(res => res.json())
        .then(res => {
            const usuario = res.Usuario;
            console.log(res)
            if (usuario) {
                localStorage.setItem("user_id", usuario.idUsuario)
                localStorage.setItem("user_nome", usuario.nome)
                localStorage.setItem("nomeUsuario",usuario.nomeDeUsuario)
                localStorage.setItem("user_email", usuario.email)
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
    window.location.href = "http://localhost:4020/"
}
document.addEventListener("DOMContentLoaded", () => {
    console.log("esta funcionando")
})