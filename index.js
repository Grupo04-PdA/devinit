const express = require("express");
const app = express();
const port = 4000;

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

app.get("/contato", (req,res) => {
    res.render("page/contato")
});

app.get("/sobre", (req,res) => {
    res.render("page/sobre")
});

app.listen(port, () => {
    console.log(`Servidor iniciado: ${port}`);
});