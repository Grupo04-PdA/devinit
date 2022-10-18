require("dotenv/config")
const express = require("express");
const cors = require("cors");
const usuarioRouter = require("./src/routes/usuario.routes");
const perguntaRouter = require("./src/routes/pergunta.routes");
const respostaRouter = require("./src/routes/resposta.routes");
const categoriaRouter = require("./src/routes/categorias.routes");
const app = express()
const port = 3020 

app.use(cors())
app.use(express.json())
app.use(usuarioRouter)
app.use(perguntaRouter)
app.use(respostaRouter)
app.use(categoriaRouter)

app.listen(port, () => {
   console.log("Servidor rodando na porta: " + port) 
});