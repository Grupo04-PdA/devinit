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
            senha: senha
        })
    })
        .then(res => console.log(res.json()))
        .then();
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("esta funcionando")
})