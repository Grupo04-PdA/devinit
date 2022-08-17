const Categorias = require("../../models/categorias");

const deletandoCategoriasController = async (req, res) => {
    try {
        let categoria = require("../../models/categorias");
        const id = req.params.id;
        const user = await categoria.findByPk(id);

        if (user) {
            await categoria.destroy({
                where: {
                    id: id
                }
            })
        } else {
            return res.json({ message: "Categoria não encontrada!" });
        }

        return res.json({ message: "Categoria deletado com sucesso!", categoria: user })
    } catch (error) {
        res.json({message: "Ocorreu um erro"});

    };
}

module.exports = deletandoCategoriasController;