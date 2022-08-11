const Sequelize = require("sequelize");
const db = require("../connection/db");
const Perguntas = require("./perguntas");
const Usuario = require("./usuario");

const Respostas = db.define("respostas", {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    resposta: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
    }
});

Respostas.belongsTo(Usuario, {
    foreignKey: "idUsuario"
});

Usuario.many(Respostas, {
    foreignKey: "respostas"
})

Respostas.belongsTo(Perguntas, {
    foreignKey: "idPerguntas"
})
Perguntas.many(Respostas, {
    foreignKey: "respostas"
})

module.exports = Respostas;