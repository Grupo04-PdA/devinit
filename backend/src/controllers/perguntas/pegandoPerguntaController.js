const pegandoPerguntaController = async(req, res) => {
    try {
        const pergunta = require("../../models/perguntas")
        const perguntas = await pergunta.findAll()
        if (perguntas != "") {
            return res.json({ perguntas: perguntas})
        } else {
            return res.json({ message: "Nenhuma pergunta foi encontrada!" })
        }
    } catch (err) {
        return res.json({ error: "Ocorreu um erro!" })
    }
}

const pegandoPerguntaIdController = async(req, res) => {
    try {
        const pergunta = require("../../models/perguntas");
        const usuario = require("../../models/usuario")
        const id = req.params.id;
        const perguntas = await pergunta.findByPk(id, {include: usuario});
        if (perguntas) {
            return res.json({ pergunta: perguntas });
        } else {
            return res.json({ message: "Pergunta nao encontrada!" })
        }
    } catch (err) {
        return res.json({ error: "Ocorreu um erro!" })
    }
}

module.exports = {pegandoPerguntaController, pegandoPerguntaIdController}