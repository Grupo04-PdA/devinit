const Perguntas = require("../../models/respostas");

const deletandoPerguntasController = async (req, res) => {
    try {
        let pergunta = require("../../models/perguntas");
        const id = req.params.id;
        const user = await pergunta.findByPk(id);

        if (user) {
            await pergunta.destroy({
                where: {
                    id: id
                }
            })
        } else {
            return res.json({ message: "Pergunta não encontrada!" });
        }

        return res.json({ message: "Pergunta deletado com sucesso!", pergunta: user })
    } catch (error) {
        res.json({message: "Ocorreu um erro"});
    };
}

module.exports = deletandoPerguntasController;