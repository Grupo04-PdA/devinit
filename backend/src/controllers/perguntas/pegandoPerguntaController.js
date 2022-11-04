const pegandoPerguntaController = async(req, res) => {
    try {
        const usuario = require("../../models/usuario")
        const respostas = require("../../models/respostas")
        const pergunta = require("../../models/perguntas")
        const perguntas = await pergunta.findAll({include: [{model: usuario}, {model: respostas}]})
        if (perguntas != "") {
            return res.json({ perguntas: perguntas})
        } else {
            return res.json({ message: "Nenhuma pergunta foi encontrada!" })
        }
    } catch (err) {
        console.log(err)
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

const pegandoRespostaPerguntaController = async(req, res) => {
    try {
        const pergunta = require("../../models/perguntas");
        const respostas = require("../../models/respostas")
        const idPergunta = req.params.idPergunta;
        const perguntas = await pergunta.findByPk(idPergunta, {include: respostas});
        if (perguntas) {
            return res.json({ pergunta: perguntas });
        } else {
            return res.json({ message: "Pergunta nao encontrada!" })
        }
    } catch (err) {
        return res.json({ error: "Ocorreu um erro!" })
    }
}

module.exports = {pegandoPerguntaController, pegandoPerguntaIdController, pegandoRespostaPerguntaController}