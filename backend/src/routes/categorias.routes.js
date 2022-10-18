const express = require("express");
const categoriaRouter = express.Router();
const criandoCategoriaController = require("../controllers/categorias/criandoCategoriaController");
const pegandoCategoriaController = require("../controllers/categorias/pegandoCategoriaController");

categoriaRouter.post("/categoria", criandoCategoriaController);

categoriaRouter.get("/categoria", pegandoCategoriaController);

module.exports = categoriaRouter;