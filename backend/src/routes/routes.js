const express = require("express")
const criandoUsuarioController = require("../controllers/usuario/criandoUsuarioController");
const deletandoUsuarioController = require("../controllers/usuario/deletandoUsuarioController");
const { pegandoUsuarioController, pegandoUsuarioIdController } = require("../controllers/usuario/pegandoUsuarioController");

const usuarioRouter = express.Router()

usuarioRouter.post("/usuario", criandoUsuarioController);

module.exports = usuarioRouter

usuarioRouter.get("/usuario", pegandoUsuarioController)

usuarioRouter.get("/usuario/:id", pegandoUsuarioIdController)



usuarioRouter.delete("/usuario/:id", deletandoUsuarioController);