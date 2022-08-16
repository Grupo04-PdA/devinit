const alterandoPerguntaController = async (req, res) => {
    try {
        let perguntas = require("../../models/perguntas");
        const id = req.params.id;
        const { pergunta, data } = req.body;
        const perguntaExistente = await perguntas.findByPk(id);
        if(perguntaExistente){
        await perguntas.update({
            pergunta: pergunta || perguntaExistente.pergunta,
            data: data || perguntaExistente.data
        }, { where: { id: id } });
        const perguntaAtualizada = await perguntas.findByPk(id);
        return res.json({ message: "Pergunta atualizada com sucesso!", pergunta: perguntaAtualizada })
    } else {
        return res.json({message: "Não foi possível alterar a pergunta!"})
    }
    } catch (err) {
        return res.json({message: "Ocorreu um erro!"})
    }
}

module.exports = alterandoPerguntaController;