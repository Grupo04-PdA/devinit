const alterandoCategoriaController = async(req, res) => {
    try{
    let categoria = require("../../models/categorias");
    const id = req.params.id;
    const { nome } = req.body;
    const categoriaExistente = await categoria.findByPk(id);
    if(categoriaExistente){
    await categoria.update({
        nome: nome || categoriaExistente.nome}, { where: { id: id } });
    const categoriaAtualizada = await categoria.findByPk(id);
    return res.json({ message: "Categoria atualizada com sucesso!", categoria: categoriaAtualizada })
    } else {
        return res.json({message: "Não foi possível alterar a categoria!"})
    }
    } catch(err){
        return res.json({message: "Ocorreu um erro!"})
    }
}

module.exports = alterandoCategoriaController;