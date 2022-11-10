const alterandoRespostaController = async(req, res) => {
    try{
    let respostas = require("../../models/respostas");
    const idResposta = req.params.id;
    const resposta = req.body.resposta;
    const respostaExistente = await respostas.findByPk(idResposta);
    if(respostaExistente){
        await respostas.update({
            resposta: resposta || respostaExistente.resposta
        }, { where: { idResposta: idResposta } });

        const respostaAtualizada = await respostas.findByPk(idResposta);
        return res.json({ message: "Resposta atualizada com sucesso!", resposta: respostaAtualizada })
    } else {
        return res.json({error: "Não foi possível alterar o usuário!"})
    }
} catch(err){
    console.log(err)
    return res.json({error: "Ocorreu um erro!"})
}
}

module.exports = alterandoRespostaController;