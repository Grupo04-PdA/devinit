const express = require("express")
const usuarioRouter = require("./src/routes/routes")
const app = express()
const port = 3020 
require("dotenv/config")



app.use(express.json())
app.use(usuarioRouter)

app.listen(port, () => {
   console.log("Servidor rodando na porta: " + port) 
});