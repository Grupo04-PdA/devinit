function fazerPergunta() {
    const naoCadastrado = document.querySelector(".nao-cadastrado");
    const container = document.querySelector(".container-perg");
    const footer = document.querySelector(".footer")
    const btnHome = document.querySelector(".botao-voltar-perg")

    if(localStorage.getItem("user_id") === null){
        naoCadastrado.style.display = "block";
        footer.style.display = "none";
        btnHome.style.display = "block";
    } else {
        container.style.display = "block";

    }
}

document.addEventListener("DOMContentLoaded", () => {
    fazerPergunta()
});