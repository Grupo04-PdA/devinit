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

app.get('/cadastro', (req, res) => {
     res.render("page/cadastro") 
})

app.post("/cadastro", (req, res)=> {
    console.log(req.body)
})

app.listen(port, () => {
    console.log(`Servidor iniciado: ${port}`);
});

