const pegandoCategoriaController = async(req, res) => {
    try {
        const categoria = require("../../models/categorias")
        const categorias = await categoria.findAll()
        if (categorias != "") {
            return res.json({ categorias })
        } else {
            return res.json({ message: "Nenhuma categoria foi encontrada!" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}

module.exports = pegandoCategoriaController;