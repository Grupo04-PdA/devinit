const express = require("express");
const app = express();
const port = 4020;


app.set("view engine","ejs");

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extended: true}));

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

let usuarios = []

app.post("/cadastro", (req, res)=> {
    const usuario = req.body;
    usuarios.push(usuario)
    return res.status(200).redirect("/homecadastrado")
})

app.get("/homecadastrado", (req, res) => {
    console.log({usuarios})
    res.render("page/home")
});

app.listen(port, () => {
    console.log(`Servidor iniciado: ${port}`);
});

