function abrirHeader() {
    const headerCad = document.querySelector(".fundo-nav-cad");
    const headerNoCad = document.querySelector(".fundo-nav-nocad");

    if(localStorage.getItem("user_id") === null){
        headerNoCad.style.display = "flex";
    } else {
        headerCad.style.display = "flex";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    abrirHeader()
});