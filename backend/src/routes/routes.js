const express = require("express")
const criandoUsuarioController = require("../controllers/usuario/criandoUsuarioController")

const usuarioRouter = express.Router()

usuarioRouter.post("/usuario", criandoUsuarioController);

module.exports = usuarioRouter