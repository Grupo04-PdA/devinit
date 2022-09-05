const criandoPerguntaController = async (req, res) => {
    try {
        const db = require("../../connection/db");
        const perguntas = require("../../models/perguntas");
    
        await db.sync();
    
        const pergunta = req.body;
        const novaPergunta = await perguntas.create({
            id: 1,
            pergunta
        });
        return res.json({ message: "Pergunta concluida com sucesso!", Pergunta: novaPergunta });
    } catch (err) {
        console.log(err)
        return res.json({ message: err });
    }
};

module.exports = criandoPerguntaController;
