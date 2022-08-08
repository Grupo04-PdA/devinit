const express = require("express");
const usuarioRouter = express.Router();
const alterandoUsuarioController = require("../controllers/usuario/alterandoUsuarioController");
const criandoUsuarioController = require("../controllers/usuario/criandoUsuarioController");
const deletandoUsuarioController = require("../controllers/usuario/deletandoUsuarioController");
const { pegandoUsuarioController, pegandoUsuarioIdController } = require("../controllers/usuario/pegandoUsuarioController");


usuarioRouter.post("/usuario", criandoUsuarioController);

usuarioRouter.get("/usuario", pegandoUsuarioController)

usuarioRouter.get("/usuario/:id", pegandoUsuarioIdController)

usuarioRouter.delete("/usuario/:id", deletandoUsuarioController);

usuarioRouter.put("/usuario/:id", alterandoUsuarioController);

module.exports = usuarioRouter;

