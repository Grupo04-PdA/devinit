const buscandoPerguntaController = async (req, res) => {
    // const Op = Sequelize.Op;              // biblioteca de operadores
    // const query = % ${ req.query.search }; // string de consulta

    // User.findAll({ where: { US_USERNAME: { [Op.like]: query } } })
    //     .then(users => {
    //         res.render('main/users', {
    //             title: "Usuarios",
    //             usuario: users,
    //         });
    //     });

    const db = require("../../connection/db");
    const perguntas = require("../../models/perguntas");
    const Sequelize = require("sequelize");

    const Op = Sequelize.Op;
    const query = `%O que é java script%`

    const busca = await perguntas.findAll({ where: { pergunta: res.body.pergunta}})
    console.log(busca)
    return res.json({perguntas: busca})
};

module.exports = buscandoPerguntaController