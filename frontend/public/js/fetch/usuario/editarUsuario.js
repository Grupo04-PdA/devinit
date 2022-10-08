function valorPlaceholder(){
    const nome = localStorage.getItem("user_nome")
    const email = localStorage.getItem("user_email")

    const placeNome = document.getElementById("input-edit-nome")
    placeNome.setAttribute("value", nome)

    const placeEmail = document.getElementById("input-edit-email")
    placeEmail.setAttribute("value", email)
}

function tirarDisabledNome(){
    const btn = document.getElementById("img-edit")
    const editNome = document.getElementById("input-edit-nome")
    const divInput = document.querySelector(".edit-nome")

    btn.addEventListener("click", () => {
        editNome.removeAttribute("disabled");
        divInput.style.boxShadow = "0px 0px 21px -2px #25185a"
    });
}

function tirarDisabledEmail(){
    const btn = document.getElementById("img-edit-email")
    const editEmail = document.getElementById("input-edit-email")
    const divInput = document.querySelector(".edit-email")

    btn.addEventListener("click", () => {
        editEmail.removeAttribute("disabled")
        divInput.style.boxShadow = "0px 0px 21px -2px #25185a"
    })
}

function tirarDisabledSenha(){
    const btn = document.getElementById("img-edit-senha")
    const editSenha = document.getElementById("input-edit-senha")
    const divInput = document.querySelector(".edit-senha")

    btn.addEventListener("click", () => {
        editSenha.removeAttribute("disabled")
        divInput.style.boxShadow = "0px 0px 21px -2px #25185a"
    })
}

async function editandoUsuario() {
    const id = localStorage.getItem("user_id");
    const url = `http://localhost:3020/usuario/${id}`;
    console.log(id)

    const inputNome = document.getElementById("input-edit-nome");
    const nome = inputNome.value;

    const inputEmail = document.getElementById("input-edit-email");
    const email = inputEmail.value;

    const inputSenha = document.getElementById("input-edit-senha");
    const senha = inputSenha.value;

    fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            nome,
            email,
            senha,
        })
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)

            if(nome !== " "){
            localStorage.removeItem("user_nome")
            localStorage.setItem("user_nome", nome)
            }

            if(email !== " "){
            localStorage.removeItem("user_email")
            localStorage.setItem("user_email", email)
            }
        })
}

document.addEventListener("DOMContentLoaded", () => {
    valorPlaceholder()
    tirarDisabledNome()
    tirarDisabledEmail()
    tirarDisabledSenha()
})