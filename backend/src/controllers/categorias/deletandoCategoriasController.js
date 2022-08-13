const deletandoCategoriasController = async (req, res) => {
    let categorias = require("../../models/categorias")
    const id = req.params.id
    const categoria = await categoria.findByPk(id)
    await categorias.destroy({
        where:{
            id:id
        }
    })
    return res.json({message: "Categoria excluida com sucesso", categoria: categoria})
}
module.exports = deletandoCategoriasController