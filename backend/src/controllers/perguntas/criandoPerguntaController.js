const criandoPerguntaController = async (req, res) => {
    try {
        const db = require("../../connection/db");
        const perguntas = require("../../models/perguntas");
        await db.sync();

        const idUsuario = req.params.idUsuario;
        const id = idUsuario.parse()

        const { pergunta, categoriaNome } = req.body;
        const novaPergunta = await perguntas.create({
            idPergunta: 2, pergunta, categoriaNome, idUsuario: id 
        });

        return res.json({ message: "Pergunta feita com sucesso!", Pergunta: novaPergunta });
    } catch (err) {
        console.log(err)
        return res.json({ error: err });
    }
};

module.exports = criandoPerguntaController;
