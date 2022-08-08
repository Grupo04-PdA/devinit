const alterandoPerguntaController = async(req, res) => {
    let perguntas = require("../../models/perguntas");
    const id = req.params.id;
    const { pergunta, data } = req.body;
    const perguntaExistente = perguntas.findByPk(id);
    await perguntas.update({
        pergunta: pergunta || perguntaExistente.pergunta,
        data: data || perguntaExistente.data
    }, { where: { id: id } });
    const perguntaAtualizada = await perguntas.findByPk(id);
    return res.json({ message: "Pergunta atualizada com sucesso!", pergunta: perguntaAtualizada })
}

module.exports = alterandoPerguntaController;