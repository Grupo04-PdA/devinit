const express = require("express");
const respostaRouter = express.Router();

const criandoRespostaController = require("../controllers/respostas/criandoRespostaController");
const {pegandoRespostaController, pegandoRespostaIdController} = require("../controllers/respostas/pegandoRespostaController")
const alterandoRespostaController = require("../controllers/respostas/alterandoRespostaController");
const deletandoRespostasController = require("../controllers/respostas/deletandoRespostasController");

respostaRouter.post("/resposta", criandoRespostaController);

respostaRouter.get("/resposta", pegandoRespostaController);
respostaRouter.get("/resposta/:id", pegandoRespostaIdController);

respostaRouter.put("/resposta/:id", alterandoRespostaController);

respostaRouter.delete("/resposta/:id", deletandoRespostasController)



module.exports = respostaRouter;