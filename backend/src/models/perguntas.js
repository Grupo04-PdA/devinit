const Sequelize = require("sequelize");
const db = require("../connection/db");
const Respostas = require("./respostas");

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

Perguntas.belongsTo(Usuario, {
    foreignKey: "idUsuario"
});

Usuario.many(Perguntas, {
    foreignKey: "perguntas"
})




module.exports = Perguntas;