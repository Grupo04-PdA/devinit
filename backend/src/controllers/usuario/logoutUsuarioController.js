const logoutUsuarioController = async (req, res) => {
    try {
        let usuario = require("../../models/usuario");
        const idUsuario = req.params.idUsuario;
        const usuarioLogado = usuario.findByPk(idUsuario);
        await usuario.update({
            nome: usuarioLogado.nome,
            email: usuarioLogado.email,
            senha: usuarioLogado.senha,
            logado: 0
        }, { where: { idUsuario: idUsuario } });
        const usuarioDeslogado = await usuario.findByPk(idUsuario);
        return res.json({ message: "Usuario deslogado com sucesso!", usuario: usuarioDeslogado })
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
};

module.exports = logoutUsuarioController
