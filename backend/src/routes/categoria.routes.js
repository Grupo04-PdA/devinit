const express = require("express");
const categoriaRouter = express.Router();

const criandoCategoriaController = require("../controllers/categorias/criandoCategoriaController");
const {pegandoCategoriaController, pegandoCategoriaIdController} = require("../controllers/categorias/pegandoCategoriasController")
const alterandoCategoriaController = require("../controllers/categorias/alterandoCategoriaController");

categoriaRouter.post("/categoria", criandoCategoriaController);

categoriaRouter.get("/categoria", pegandoCategoriaController);
categoriaRouter.get("/categoria/:id", pegandoCategoriaIdController);

categoriaRouter.put("/categoria/:id", alterandoCategoriaController);

module.exports = categoriaRouter;