const express = require("express");
const perguntaRouter = express.Router();

const criandoPerguntaController = require("../controllers/perguntas/criandoPerguntaController");
const {pegandoPerguntaController, pegandoPerguntaIdController} = require("../controllers/perguntas/pegandoPerguntaController")
const alterandoPerguntaController = require("../controllers/perguntas/alterandoPerguntaController");

perguntaRouter.post("/pergunta", criandoPerguntaController);

perguntaRouter.get("/pergunta", pegandoPerguntaController);
perguntaRouter.get("/pergunta/:id", pegandoPerguntaIdController);

perguntaRouter.put("/pergunta/:id", alterandoPerguntaController);

module.exports = perguntaRouter;