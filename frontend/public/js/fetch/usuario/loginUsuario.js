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
            const usuario = res.usuario
            console.log(res)
            if (usuario) {
                window.location.href = `http://localhost:4020/perfil/${usuario.nomeDeUsuario}`
                localStorage.setItem("user_id", usuario.idUsuario)
                localStorage.setItem("user_name", usuario.nomeDeUsuario)
            } else {
                console.log("Ocorreu um erro!")
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