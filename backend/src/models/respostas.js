const Sequelize = require("sequelize");
const db = require("../connection/db");
const Perguntas = require("./perguntas");

const Respostas = db.define("respostas", {
    idResposta: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    resposta: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }
});

// Respostas.belongsTo(Usuario, {
//     foreignKey: "idUsuario"
// });

// Usuario.hasMany(Respostas, {
//     foreignKey: "respostas"
// })

Perguntas.hasMany(Respostas, {
    foreignKey: "idPergunta"
})

Respostas.belongsTo(Perguntas, {
    constraint: true,
    foreignKey: "idPergunta"
})

module.exports = Respostas;