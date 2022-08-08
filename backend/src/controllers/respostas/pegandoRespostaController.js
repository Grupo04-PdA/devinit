const pegandoRespostaController = async(req, res) => {
    const respostas = require("../../models/respostas")
    const resposta = await respostas.findAll()
    return res.json({resposta})
}

const pegandoRespostaIdController = async(req, res) => {
    const respostas = require("../../models/respostas");
    const id = req.params.id;
    const resposta = await respostas.findByPk(id);
    return res.json({resposta: resposta}); 
}

module.exports = {pegandoRespostaController, pegandoRespostaIdController}