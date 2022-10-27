const express = require("express");
const categoriaRouter = express.Router();
const criandoCategoriaController = require("../controllers/categorias/criandoCategoriaController");
const { pegandoCategoriaController, pegandoCategoriaIDController } = require("../controllers/categorias/pegandoCategoriaController");

categoriaRouter.post("/categoria", criandoCategoriaController);

categoriaRouter.get("/categoria", pegandoCategoriaController);

categoriaRouter.get("/categoria/:id", pegandoCategoriaIDController);

module.exports = categoriaRouter;