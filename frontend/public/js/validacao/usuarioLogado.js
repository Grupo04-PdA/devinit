function abrirHeader() {
    const headerCad = document.querySelector(".fundo-nav-cad");
    const headerNoCad = document.querySelector(".fundo-nav-nocad")
    // const usuario = localStorage.getItem("user_nome")


    if(localStorage.getItem("user_nome") === null){
        headerNoCad.style.display = "flex";
    } else {
        headerCad.style.display = "flex";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("ta pegando")
    abrirHeader()
});