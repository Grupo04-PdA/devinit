const Sequelize = require("sequelize");
const db = require("../connection/db");
const Usuario = require("./usuario");

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

Usuario.hasMany(Perguntas, {
    foreignKey: "perguntas"
})




module.exports = Perguntas;