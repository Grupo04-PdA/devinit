const alterandoPerguntaController = async (req, res) => {
    try {
        let perguntas = require("../../models/perguntas");
        const idPergunta = req.params.id;
        const pergunta = req.body.pergunta;
        const perguntaExistente = await perguntas.findByPk(idPergunta);
        if (perguntaExistente) {
            await perguntas.update({
                pergunta: pergunta || perguntaExistente.pergunta
            }, { where: { idPergunta: idPergunta } });
            const perguntaAtualizada = await perguntas.findByPk(idPergunta);
            return res.json({ message: "Pergunta atualizada com sucesso!", pergunta: perguntaAtualizada })
        } else {
            return res.json({ error: "Não foi possível alterar a pergunta!" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}

module.exports = alterandoPerguntaController;