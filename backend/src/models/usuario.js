const Sequelize = require("sequelize");
const db = require("../connection/db");

const Usuario = db.define("usuario", {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }, 
    foto: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    }
});

module.exports = Usuario;