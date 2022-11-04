function getUser() {
    const idUsuario = localStorage.getItem("user_id")
    const url = `http://localhost:3020/usuario/${idUsuario}`
    fetch(url)
        .then(res => res.json())
        .then(res => {
            const usuario = res.Usuario
            const nome = usuario.nome
            const email = usuario.email
            const usernome = usuario.nomeDeUsuario
            const nomeUsuario = document.querySelector(".nome-usuario");
            const strong = document.createElement("strong")
            strong.innerHTML = nome
            nomeUsuario.appendChild(strong)
            valorPlaceholder(nome, usernome, email)
        })
}

function valorPlaceholder(nome, usernome, email){
    const placeNome = document.getElementById("input-edit-nome")
    placeNome.setAttribute("value", nome)

    const placeUserNome = document.getElementById("input-edit-nomeusuario")
    placeUserNome.setAttribute("value", usernome)

    const placeEmail = document.getElementById("input-edit-email")
    placeEmail.setAttribute("value", email)
}

document.addEventListener("DOMContentLoaded", getUser())