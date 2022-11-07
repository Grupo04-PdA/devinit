export function pegandoRespostas(idPergunta) {
    const url = `http://localhost:3020/respostas/${idPergunta}`

    fetch(url)
        .then(res => res.json())
        .then(res => {
            const respostas = res.respostas
            if (respostas) {
                for(let i = 0; i < respostas.length; i++){
                console.log(idPergunta, respostas)
                const slide = document.querySelector(".pergunta")
                console.log(slide)
                const divResposta = document.createElement("div")
                divResposta.classList.add("resposta")
                divResposta.innerHTML = "<img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg' height='13rem' style='margin: 0.5rem;'>"

                const aResp = document.createElement("a")
                aResp.classList.add("link-usuario")
                aResp.innerHTML = "teste"

                const h6 = document.createElement("h6")
                h6.innerHTML = respostas[i].resposta

                console.log(respostas[i].resposta)

                divResposta.appendChild(aResp)
                divResposta.appendChild(h6)
                slide.appendChild(divResposta)
                }
            } else {
                console.log("Ocorreu um erro!!!")
            }
        })

    document.addEventListener("DOMContentLoaded", () => {
        console.log("ok")
        pegandoRespostas(3)
    })
}