const express = require("express");
const alterandoUsuarioController = require("../controllers/usuario/alterandoUsuarioController");
const criandoUsuarioController = require("../controllers/usuario/criandoUsuarioController");
const deletandoUsuarioController = require("../controllers/usuario/deletandoUsuarioController");
const { pegandoUsuarioController, pegandoUsuarioIdController } = require("../controllers/usuario/pegandoUsuarioController");

const criandoCategoriaController = require("../controllers/categorias/criandoCategoriaController");

const criandoPerguntaController = require("../controllers/perguntas/criandoPerguntaController");

const criandoRespostaController = require("../controllers/respostas/criandoRespostaController");

const usuarioRouter = express.Router()

usuarioRouter.post("/usuario", criandoUsuarioController);

usuarioRouter.get("/usuario", pegandoUsuarioController)

usuarioRouter.get("/usuario/:id", pegandoUsuarioIdController)

usuarioRouter.delete("/usuario/:id", deletandoUsuarioController);

usuarioRouter.put("/usuario/:id", alterandoUsuarioController);

// Categorias

usuarioRouter.post("/categoria", criandoCategoriaController);

// Perguntas

usuarioRouter.post("/pergunta", criandoPerguntaController);

// Respostas

usuarioRouter.post("/resposta", criandoRespostaController);

module.exports = usuarioRouter;

