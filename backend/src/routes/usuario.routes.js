const express = require("express");
const usuarioRouter = express.Router();
const alterandoUsuarioController = require("../controllers/usuario/alterandoUsuarioController");
const criandoUsuarioController = require("../controllers/usuario/criandoUsuarioController");
const deletandoUsuarioController = require("../controllers/usuario/deletandoUsuarioController");
const loginUsuarioController = require("../controllers/usuario/loginUsuarioController");
const { pegandoUsuarioController, pegandoUsuarioIdController } = require("../controllers/usuario/pegandoUsuarioController");
const logoutUsuarioController = require("../controllers/usuario/logoutUsuarioController");

usuarioRouter.post("/usuario", criandoUsuarioController);

usuarioRouter.get("/usuario", pegandoUsuarioController)

usuarioRouter.get("/usuario/:id", pegandoUsuarioIdController)

usuarioRouter.post("/login", loginUsuarioController);

usuarioRouter.delete("/usuario/:id", deletandoUsuarioController);

usuarioRouter.put("/usuario/:idUsuario", alterandoUsuarioController);

usuarioRouter.put("/logout/:idUsuario", logoutUsuarioController); 

module.exports = usuarioRouter;

