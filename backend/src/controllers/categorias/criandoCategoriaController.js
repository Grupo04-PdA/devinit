const criandoCategoriaController = async (req, res) => {
    const db = require("../../connection/db");
    const categoria = require("../../models/categorias")

    await db.sync();

    const { nome } = req.body
    const novaCategoria = await categoria.create({
        nome
    });
    return res.json({ Categoria: novaCategoria });
};

module.exports = criandoCategoriaController;