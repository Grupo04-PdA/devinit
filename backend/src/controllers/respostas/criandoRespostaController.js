const criandoRespostaController = async (req, res) => {
    try {
        const db = require("../../connection/db");
        const respostas = require("../../models/respostas");
        await db.sync();
        
        const idUsuario = req.params.idUsuario
        const id = parseInt(idUsuario)

        const { resposta , idPergunta} = req.body;
        const novaResposta = await respostas.create({
            resposta, idPergunta, idUsuario: id
        });
        return res.json({ Message: "Resposta enviada com sucesso!",  Resposta: novaResposta });
    } catch(err){
        console.log(err)
        return res.json({ error: "Ocorreu um erro no servidor!"})
    }
}; 

module.exports = criandoRespostaController;