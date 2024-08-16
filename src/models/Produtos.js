const { DataTypes } = require("sequelize");
const sequelize = require('../config/config');

const Produtos = sequelize.define('produtos', {

    nome: {
        type:DataTypes.STRING,
        allowNull: false
    },
    
    preco:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantidade:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Produtos;
