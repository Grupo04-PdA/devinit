function abrirModalEditado() {
    const modal = document.querySelector(".modal-perfil-editado")
    modal.style.display = "block"

    const modalEdit = document.querySelector(".modal-content")
    modalEdit.style.display = "none"
}

async function editandoUsuario() {
    const idUsuario = localStorage.getItem("user_id");
    const url = `http://localhost:3020/usuario/${idUsuario}`;

    const inputNome = document.getElementById("input-edit-nome");
    const nome = inputNome.value;

    const inputEmail = document.getElementById("input-edit-email");
    const email = inputEmail.value;

    const inputUserName = document.getElementById("input-edit-nomeusuario");
    const nomeDeUsuario = inputUserName.value;

    const inputSenha = document.getElementById("input-edit-senha");
    const senha = inputSenha.value;

    if (nome == "" || email == "" || nomeDeUsuario == "") {
        return
    } else {
        fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nome,
                nomeDeUsuario,
                email,
                senha,
            })
        })
            .then(res => res.json())
            .then(res => {

                if (res.message) {
                    console.log("Cadastrou!")
                    abrirModalEditado()
                } else {
                    console.log(res)
                }
            })
    }
}

function fecharModalEditado() {
    window.location.href = "http://localhost:4020/perfil"
}

document.addEventListener("DOMContentLoaded", () => {

})