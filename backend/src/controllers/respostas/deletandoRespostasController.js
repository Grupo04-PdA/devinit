const deletandoRespostasController = async (req, res) => {
    let respostas = require("../../models/respostas")
    const id = req.params.id
    const resposta = await resposta.findByPk(id)
    await respostas.destroy({
        where:{
            id:id
        }
    })
    return res.json({message: "Resposta excluida com sucesso", resposta: resposta})
}
module.exports = deletandoRespostasController