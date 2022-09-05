const criandoCategoriaController = async (req, res) => {
    try {
        const db = require("../../connection/db");
        const categoria = require("../../models/categorias")
    
        await db.sync({force: true});
    
        const { nome } = req.body
        const novaCategoria = await categoria.create({
            nome
        });
        return res.json({ Categoria: novaCategoria });
    } catch(err) {
        return res.json({message: err})
    }
};

module.exports = criandoCategoriaController;