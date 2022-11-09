const express = require("express");
const verificaLoginMidleware = require("./public/js/middlewares/verificaLogin");
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

app.get('/perfil/:nomeDeUsuario', verificaLoginMidleware, (req, res) =>{
    res.render("page/perfil")
});

app.get('/cadastro', (req, res) => {
     res.render("page/cadastro") 
})

app.listen(port, () => {
    console.log(`Servidor iniciado: ${port}`);
});

