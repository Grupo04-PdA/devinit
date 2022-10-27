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

const pegandoCategoriaIDController = async(req, res) => {
    try { 
    const perguntas = require("../../models/perguntas")
        const categoria = require("../../models/categorias")
        const id = req.params.id

        const categorias = await categoria.findByPk(id, {include: [{model: perguntas}]})
        if (!categorias) {
            return res.json({ message: "Nenhuma categoria foi encontrada!" })
        } else {
            return res.json({ categorias })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}

module.exports = { pegandoCategoriaController, pegandoCategoriaIDController};