//var usuario 
//export function retornandoUsuario() {
   // return usuario 
//}

async function login() {
    console.log("qualquer")
    const inputEmail = document.getElementById("email_login")
    const email = inputEmail.value;
    console.log(email)

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
            const usuario = res.usuario
            if (res.message) {
                window.location.href = "http://localhost:4020/homecadastrado"
                localStorage.setItem("user_id", usuario.id)
            } else {
                console.log("Ocorreu um erro")
                abrirModal()
            }
        });
}

function abrirModal() {
    const modalLogin = document.querySelector(".modal-login")

    modalLogin.style.display = "block"
}

function fecharModal() {
    const modalLogin = document.querySelector(".modal-login")

    modalLogin.style.display = "none"
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("está funcionando")
})