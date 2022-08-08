const pegandoCategoriaController = async(req, res) => {
    const categorias = require("../../models/categorias")
    const categoria = await categorias.findAll()
    return res.json({categoria})
}

const pegandoCategoriaIdController = async(req, res) => {
    const categorias = require("../../models/categorias");
    const id = req.params.id;
    const categoria = await categorias.findByPk(id);
    return res.json({categoria: categorias}); 
}

module.exports = {pegandoCategoriaController, pegandoCategoriaIdController}