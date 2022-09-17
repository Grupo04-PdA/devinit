const buscandoPerguntaController = async (req, res) => {
    try {
        const db = require("../../connection/db");
        const perguntas = require("../../models/perguntas");
        const Sequelize = require("sequelize");

        const Op = Sequelize.Op;

        const { pesquisa } = req.body

        console.log(pesquisa)
        const busca = await perguntas.findAll({where: { pergunta: {[Op.like]: `%${pesquisa}%`}}})
        console.log(busca)
        if (busca == "") {
            return res.json({
                message: "Pergunta não encontrada!"
            })
        } else {
            return res.json({
                perguntas: busca
            })
        }
    } catch (error) {
        console.log(error)
    }
};

module.exports = buscandoPerguntaController