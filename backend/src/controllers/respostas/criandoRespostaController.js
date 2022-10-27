const criandoRespostaController = async (req, res) => {
    try {
        const db = require("../../connection/db");
        const respostas = require("../../models/respostas");
        await db.sync();
        
        const idPergunta = req.params.idPergunta
        const id = parseInt(idPergunta)

        const resposta = req.body.resposta;
        const novaResposta = await respostas.create({
            resposta, idPergunta: id
        });
        return res.json({ Message: "Resposta enviada com sucesso!",  Resposta: novaResposta });
    } catch(err){
        console.log(err)
        return res.json({ error: err });
        //return res.json({message: "Ocorreu um erro no servidor!"})
    }
}; 

module.exports = criandoRespostaController;