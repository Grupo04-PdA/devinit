const pegandoCategoriaController = async(req, res) => {
    try {
        const categoria = require("../../models/categorias")
        const categorias = await categoria.findAll()
        if (categorias != "") {
            return res.json({ categorias })
        } else {
            return res.json({ message: "Essa categoria nao foi encontrada!" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um errooooo!" })
    }
}

const pegandoCategoriaIdController = async(req, res) => {
    try {
        const categoria = require("../../models/categorias");
        const id = req.params.id;
        const categorias = await categoria.findByPk(id);
        if (categorias) {
            return res.json({ categoria: categorias });
        } else {
            return res.json({ message: "Categoria inexistente" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}

module.exports = {pegandoCategoriaController, pegandoCategoriaIdController}