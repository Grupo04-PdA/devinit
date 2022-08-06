const criandoRespostaController = async (req, res) => {
    const db = require("../../connection/db");
    const respostas = require("../../models/respostas");

    await db.sync();

    const { resposta, data } = req.body;
    const novaResposta = await respostas.create({
        resposta, data
    });
    return res.json({ "Message": "Resposta enviada com sucesso!",  Resposta: novaResposta });
}; 

module.exports = criandoRespostaController;