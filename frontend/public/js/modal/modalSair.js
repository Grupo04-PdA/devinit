function openModalSair(){
    let modal = document.querySelector(".modal-sair");

    modal.style.display = 'block';
}

function fecharModalSair(){
    let modal = document.querySelector(".modal-sair");

    modal.style.display = 'none';
}

document.addEventListener("DOMContetLoaded", () => {
    console.log("carregou")
})