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

    const inputSenha = document.getElementById("input-edit-senha");
    const senha = inputSenha.value;

    if (nome == "" || email == "") {
        return
    } else {
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

                if (res.message) {
                    if (nome !== " ") {
                        localStorage.removeItem("user_nome")
                        localStorage.setItem("user_nome", nome)
                    }

                    if (email !== " ") {
                        localStorage.removeItem("user_email")
                        localStorage.setItem("user_email", email)
                    }
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