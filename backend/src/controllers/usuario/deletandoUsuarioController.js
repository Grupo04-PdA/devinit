const deletandoUsuarioController = async (req, res) => {
    let usuario = require("../../models/usuario");
    const id = req.params.id;
    const user = await usuario.findByPk(id);
    await usuario.destroy({
        where: {
            id: id
        }
    })
    return res.json({message: "Usuario deletado com sucesso!", usuario: user})
}

module.exports = deletandoUsuarioController;