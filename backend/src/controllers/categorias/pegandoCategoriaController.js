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
        const perguntas = require("../../models/perguntas")
        const categoria = require("../../models/categorias")
        const id = 2

        const categorias = await categoria.findByPk(id, {include: [{model: perguntas}]})
        console.log(categorias)
            return res.json({ categorias })
        //     return res.json({ message: "Nenhuma categoria foi encontrada!" })
        // return res.json(err)
}

module.exports = { pegandoCategoriaController, pegandoCategoriaIDController};