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

app.get('/perfil', (req, res) =>{
    res.render("page/perfil")
})

app.get('/cadastro', (req, res) => {
     res.render("page/cadastro") 
})

app.get("/homecadastrado", (req, res) => {
    res.render("page/home")
});

app.get("/pesquisacadastrado", (req, res) => {
    res.render("page/pesquisaCadastrado")
});

app.get("/perguntarcadastrado", (req, res) => {
    res.render("page/perguntaCadastrado")
});

app.listen(port, () => {
    console.log(`Servidor iniciado: ${port}`);
});

