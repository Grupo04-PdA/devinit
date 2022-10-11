const Sequelize = require("sequelize");
const db = require("../connection/db");
const Usuario = require("./usuario");
const { hasMany } = require('sequelize');


const Perguntas = db.define("perguntas", {
    idPergunta: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    pergunta: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    categoriaNome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }
});

Perguntas.belongsTo(Usuario, {
    foreignKey: "idUsuario"
});

Usuario.hasMany(Perguntas, {
    foreignKey: "idPergunta"
})




module.exports = Perguntas;