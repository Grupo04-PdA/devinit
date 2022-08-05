const Sequelize = require("sequelize");
const db = require("../connection/db");

const Perguntas = db.define("perguntas", {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    pergunta: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
    }
});

module.exports = Perguntas;