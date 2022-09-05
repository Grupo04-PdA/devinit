const alterandoRespostaController = async(req, res) => {
    try{
    let respostas = require("../../models/respostas");
    const id = req.params.id;
    const resposta = req.body;
    const respostaExistente = await respostas.findByPk(id);
    if(respostaExistente){
        await respostas.update({
            resposta: resposta || respostaExistente.resposta
        }, { where: { id: id } });

        const respostaAtualizada = await respostas.findByPk(id);
        return res.json({ message: "Resposta atualizada com sucesso!", resposta: respostaAtualizada })
    } else {
        return res.json({message: "Não foi possível alterar o usuário!"})
    }
} catch(err){
    return res.json({message: "Ocorreu um erro!"})
}
}

module.exports = alterandoRespostaController;