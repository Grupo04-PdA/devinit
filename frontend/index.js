const express = require("express");
const app = express();
const port = 4020;


app.set("view engine","ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
    res.render("index")
});

app.get("/perguntar", (req,res) => {
    res.render("page/perguntar")
});

app.get("/pesquisa", (req,res) => {
    res.render("page/pesquisa")
});

app.get("/login", (req,res) => {
    res.render("page/login")
});

// async function blockPage(req, res, next) {
//     const idUsuario = localStorage.getItem("user_id");
//     const url = `http://localhost:3020/usuario/${idUsuario}`;

//     await fetch(url)
//     .then(res => res.json())
//     .then(res => {
//       const usuario = res.Usuario;
//       console.log(usuario);  
//     })
//     next()
// }

function verificaLoginMidleware(req, resp, next) {
    console.log(req.params)
    const { nomeDeUsuario }  = req.params;

    if (nomeDeUsuario == nomeDeUsuario) {
        next();
    } else {
        resp.status(401).send({ error: 'Não autorizado' })
    }
}

app.get("/perfil/:nomeDeUsuario", verificaLoginMidleware,(req, res) => {
    res.render("page/perfil")
});

app.get('/cadastro', (req, res) => {
     res.render("page/cadastro") 
})

app.listen(port, () => {
    console.log(`Servidor iniciado: ${port}`);
});

