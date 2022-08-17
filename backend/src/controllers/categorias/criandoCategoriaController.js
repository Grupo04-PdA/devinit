const criandoCategoriaController = async (req, res) => {
    try {
        const db = require("../../connection/db");
        const categoria = require("../../models/categorias")
    
        await db.sync();
    
        const { nome } = req.body
        const novaCategoria = await categoria.create({
            nome
        });
        return res.json({ Categoria: novaCategoria });
    } catch(err) {
        return res.json({message: "Ocorreu um erro no servidor!"})
    }
};

module.exports = criandoCategoriaController;