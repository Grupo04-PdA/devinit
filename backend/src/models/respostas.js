const Sequelize = require("sequelize");
const db = require("../connection/db");

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

module.exports = Respostas;