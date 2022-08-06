const criandoPerguntaController = async (req, res) => {
    const db = require("../../connection/db");
    const perguntas = require("../../models/perguntas");

    await db.sync();

    const { pergunta, data } = req.body;
    const novaPergunta = await perguntas.create({
        pergunta, data
    });
    return res.json({ message: "Pergunta concluida com sucesso!", Pergunta: novaPergunta });
};

module.exports = criandoPerguntaController;