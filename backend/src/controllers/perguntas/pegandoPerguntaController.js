const pegandoPerguntaController = async(req, res) => {
    try {
        const pergunta = require("../../models/perguntas")
        const perguntas = await pergunta.findAll()
        if (perguntas != "") {
            return res.json({ perguntas })
        } else {
            return res.json({ message: "Nenhuma pergunta foi encontrada!" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}

const pegandoPerguntaIdController = async(req, res) => {
    try {
        const pergunta = require("../../models/perguntas");
        const id = req.params.id;
        const perguntas = await pergunta.findByPk(id);
        if (perguntas) {
            return res.json({ pergunta: perguntas });
        } else {
            return res.json({ message: "Pergunta nao encontrada!" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}

module.exports = {pegandoPerguntaController, pegandoPerguntaIdController}