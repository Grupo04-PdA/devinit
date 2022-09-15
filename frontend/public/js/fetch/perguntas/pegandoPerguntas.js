function puxarPerguntas(){
    var url = "http://localhost:3020/pergunta"

     fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        const perguntas = res.perguntas;
        perguntas.map(pergunta => {
            console.log(pergunta)
        })
    })
}

document.addEventListener("DOMContentLoaded", puxarPerguntas())

























/*const usuarios = res.usuarios;
       //enviar(res.usuarios[0].cep)
       usuarios.map(usuario =>{
        console.log(usuario)*/