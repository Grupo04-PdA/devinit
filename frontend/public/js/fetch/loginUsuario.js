async function login() {
    const inputEmail = document.getElementById("email_login")
    const email = inputEmail.value;

    const inputSenha = document.getElementById("senha_login")
    const senha = inputSenha.value;
    const url = "http://localhost:3020/login"
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email, 
            senha: senha
        })
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        window.location.href = "http://localhost:4020/homecadastrado" 
    });
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("está funcionando")
})