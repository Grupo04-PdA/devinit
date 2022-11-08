
async function puxandoCategorias() {
    var url = "http://localhost:3020/categoria";

    await fetch(url)
        .then(res => res.json())
        .then(res => {
            const categorias = res.categorias;

            if (categorias) {
                for (let i = 0; i < categorias.length; i++) {
            const selectCategorias = document.getElementById("select-perguntar");
            const option = document.createElement("option");
            option.setAttribute("value", categorias[i].idCategoria)
            option.innerHTML = categorias[i].categoria
            selectCategorias.appendChild(option)
                }
            }
        })

}

document.addEventListener("DOMContentLoaded", puxandoCategorias())