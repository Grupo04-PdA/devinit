const pegandoRespostaController = async (req, res) => {
    try {
        const idPergunta = req.params.idPergunta
        const resposta = require("../../models/respostas")
        const usuario = require("../../models/usuario")
        const respostas = await resposta.findAll({ where: { idPergunta:  idPergunta }})
        if (respostas != "") {
            return res.json({ respostas })
        } else {
            return res.json({ message: "Nenhuma resposta foi encontrada!" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}

const pegandoRespostaIdController = async (req, res) => {
    try {
        const resposta = require("../../models/respostas");
        const id = req.params.id;
        const respostas = await resposta.findByPk(id);
        if (respostas) {
            return res.json({ resposta: respostas });
        } else {
            return res.json({ message: "Resposta inexistente!" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}

module.exports = { pegandoRespostaController, pegandoRespostaIdController }