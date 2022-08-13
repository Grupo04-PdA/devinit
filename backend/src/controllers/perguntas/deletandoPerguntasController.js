const deletandoPerguntasController = async (req, res) => {
    let perguntas = require("../../models/perguntas")
    const id = req.params.id
    const pergunta = await perguntas.findByPk(id)
    await perguntas.destroy({
        where:{
            id:id
        }
    })
    return res.json({message: "Pergunta excluida com sucesso", pergunta: pergunta})
}
module.exports = deletandoPerguntasController