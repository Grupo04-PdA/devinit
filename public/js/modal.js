function abrirModalSobre() {
    let modalSobre = document.querySelector('.modal-sobre');

    modalSobre.style.display = 'block';
}

function fecharModalSobre() {
    let modalSobre = document.querySelector('.modal-sobre');

    modalSobre.style.display = 'none';
}

function abrirModalContato() {
    let modalContato = document.querySelector(".modal-contato");

    modalContato.style.display = "block";
}

function fecharModalContato() {
    let modalContato = document.querySelector(".modal-contato");

    modalContato.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("carregou")
});1