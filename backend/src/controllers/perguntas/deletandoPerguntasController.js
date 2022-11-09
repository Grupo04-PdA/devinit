const Perguntas = require("../../models/respostas");

const deletandoPerguntasController = async (req, res) => {
    try {
        let pergunta = require("../../models/perguntas");
        const idPergunta = req.params.id;
        const user = await pergunta.findByPk(idPergunta);

        if (user) {
            await pergunta.destroy({
                where: {
                    idPergunta: idPergunta
                }
            })
        } else {
            return res.json({ error: "Pergunta não encontrada!" });
        }

        return res.json({ message: "Pergunta deletado com sucesso!", pergunta: user })
    } catch (error) {
        res.json({error: "Ocorreu um erro"});
    };
}

module.exports = deletandoPerguntasController;