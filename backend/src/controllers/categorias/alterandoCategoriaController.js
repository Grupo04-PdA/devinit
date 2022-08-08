const alterandoCategoriaController = async(req, res) => {
    let categoria = require("../../models/categorias");
    const id = req.params.id;
    const { nome } = req.body;
    const categoriaExistente = categoria.findByPk(id);
    await categoria.update({
        nome: nome || categoriaExistente.nome}, { where: { id: id } });
    const categoriaAtualizada = await categoria.findByPk(id);
    return res.json({ message: "Categoria atualizada com sucesso!", categoria: categoriaAtualizada })
}

module.exports = alterandoCategoriaController;