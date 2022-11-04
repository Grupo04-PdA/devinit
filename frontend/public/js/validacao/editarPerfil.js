function tirarDisabledNome(){
    const btn = document.getElementById("img-edit")
    const editNome = document.getElementById("input-edit-nome")
    const divInput = document.querySelector(".edit-nome")

    btn.addEventListener("click", () => {
        editNome.removeAttribute("disabled");
        divInput.style.boxShadow = "0px 0px 21px -2px #25185a"
    });
}

function tirarDisabledUserNome(){
    const btn = document.getElementById("img-edit-nomeusuario")
    const editNome = document.getElementById("input-edit-nomeusuario")
    const divInput = document.querySelector(".edit-nomeusuario")

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
document.addEventListener("DOMContentLoaded",()=>{
    tirarDisabledEmail()
    tirarDisabledSenha()
    tirarDisabledNome()
    tirarDisabledUserNome()
})