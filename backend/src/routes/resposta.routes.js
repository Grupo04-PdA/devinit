const express = require("express");
const respostaRouter = express.Router();

const criandoRespostaController = require("../controllers/respostas/criandoRespostaController");
const {pegandoRespostaController, pegandoRespostaIdController} = require("../controllers/respostas/pegandoRespostaController")
const alterandoRespostaController = require("../controllers/respostas/alterandoRespostaController");

respostaRouter.post("/resposta", criandoRespostaController);

respostaRouter.get("/resposta", pegandoRespostaController);
respostaRouter.get("/resposta/:id", pegandoRespostaIdController);

respostaRouter.put("/resposta/:id", alterandoRespostaController);


module.exports = respostaRouter;