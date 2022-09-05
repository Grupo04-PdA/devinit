async function login() {
    const inputEmail = document.getElementById("email_login")
    const email = inputEmail.value;

    const inputSenha = document.getElementById("senha_login")
    const senha = inputSenha.value;
    const url = "http://localhost:3020/login"
    fetch(url, {
        method: "POST",
        headers: {
            "ContentType": "application/json"
        },
        body: JSON.stringify(email, senha)
    })
        .then(res => console.log(res))
        .then(res => window.alert("Login concluído"));
}
document.addEventListener("DOMContentLoaded", () => {
    console.log("está funcionando")
})