const alterandoRespostaController = async(req, res) => {
    let respostas = require("../../models/respostas");
    const id = req.params.id;
    const { resposta, data } = req.body;
    const respostaExistente = respostas.findByPk(id);
    await respostas.update({
        resposta: resposta || respostaExistente.resposta,
        data: data || respostaExistente.data
    }, { where: { id: id } });
    const respostaAtualizada = await respostas.findByPk(id);
    return res.json({ message: "Resposta atualizada com sucesso!", resposta: respostaAtualizada })
}

module.exports = alterandoRespostaController;