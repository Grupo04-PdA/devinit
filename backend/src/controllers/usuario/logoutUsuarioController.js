const logoutUsuarioController = async (req, res) => {
    try {
        let usuario = require("../../models/usuario");
        const id = req.params.id;
        const usuarioLogado = usuario.findByPk(id);
        await usuario.update({
            nome: usuarioLogado.nome,
            email: usuarioLogado.email,
            senha: usuarioLogado.senha,
            logado: 0
        }, { where: { id: id } });
        const usuarioDeslogado = await usuario.findByPk(id);
        return res.json({ message: "Usuario deslogado com sucesso!", usuario: usuarioDeslogado })
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
};

module.exports = logoutUsuarioController
