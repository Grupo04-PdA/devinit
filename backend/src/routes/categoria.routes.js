const express = require("express");
const categoriaRouter = express.Router();

const criandoCategoriaController = require("../controllers/categorias/criandoCategoriaController");
const {pegandoCategoriaController, pegandoCategoriaIdController} = require("../controllers/categorias/pegandoCategoriasController")
const alterandoCategoriaController = require("../controllers/categorias/alterandoCategoriaController");
const deletandoCategoriasController = require("../controllers/categorias/deletandoCategoriasController");

categoriaRouter.post("/categoria", criandoCategoriaController);

categoriaRouter.get("/categoria", pegandoCategoriaController);
categoriaRouter.get("/categoria/:id", pegandoCategoriaIdController);

categoriaRouter.put("/categoria/:id", alterandoCategoriaController);

categoriaRouter.delete("/categoria/:id", deletandoCategoriasController)


module.exports = categoriaRouter;