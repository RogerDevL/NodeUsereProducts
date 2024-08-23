const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');



const Funcionario = sequelize.define('funcionario', {

    nome:{
        type:DataTypes.STRING,
        allowNull: false
    },

    idade:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    cargo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    salario:{
        type:DataTypes.DOUBLE,
        allowNull:false
    }

});

module.exports = Funcionario;





