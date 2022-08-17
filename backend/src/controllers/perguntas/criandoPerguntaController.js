const criandoPerguntaController = async (req, res) => {
    try {
        const db = require("../../connection/db");
        const perguntas = require("../../models/perguntas");
    
        await db.sync();
    
        const { pergunta, data } = req.body;
        const novaPergunta = await perguntas.create({
            pergunta, data
        });
        return res.json({ message: "Pergunta concluida com sucesso!", Pergunta: novaPergunta });
    } catch (err) {
        return res.json({ message: "Ocorreu um erro no servidor!" });
    }
};

module.exports = criandoPerguntaController;
