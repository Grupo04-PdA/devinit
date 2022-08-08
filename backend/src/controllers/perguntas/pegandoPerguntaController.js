const pegandoPerguntaController = async(req, res) => {
    const perguntas = require("../../models/perguntas")
    const pergunta = await perguntas.findAll()
    return res.json({pergunta})
}

const pegandoPerguntaIdController = async(req, res) => {
    const perguntas = require("../../models/perguntas");
    const id = req.params.id;
    const pergunta = await perguntas.findByPk(id);
    return res.json({pergunta: perguntas}); 
}

module.exports = {pegandoPerguntaController, pegandoPerguntaIdController}