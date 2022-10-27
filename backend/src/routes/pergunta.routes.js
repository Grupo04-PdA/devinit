const express = require("express");
const perguntaRouter = express.Router();

const criandoPerguntaController = require("../controllers/perguntas/criandoPerguntaController");
const {pegandoPerguntaController, pegandoPerguntaIdController, pegandoRespostaPerguntaController} = require("../controllers/perguntas/pegandoPerguntaController")
const alterandoPerguntaController = require("../controllers/perguntas/alterandoPerguntaController");
const deletandoPerguntasController = require("../controllers/perguntas/deletandoPerguntasController");
const buscandoPerguntaController = require("../controllers/perguntas/buscandoperguntacontroller");

perguntaRouter.post("/pergunta/:idUsuario", criandoPerguntaController);

perguntaRouter.get("/pergunta", pegandoPerguntaController);
perguntaRouter.get("/pergunta/:id", pegandoPerguntaIdController);
perguntaRouter.get("/perguntaRespostas/:idPergunta", pegandoRespostaPerguntaController);

perguntaRouter.post("/busca", buscandoPerguntaController)

perguntaRouter.put("/pergunta/:id", alterandoPerguntaController);

perguntaRouter.delete("/pergunta/:id", deletandoPerguntasController)


module.exports = perguntaRouter;