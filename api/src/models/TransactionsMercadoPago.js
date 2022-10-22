// Inicializamos sequelize

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('transactionsMercadoPago', {
         id: { 
             type: DataTypes.UUID,
             defaultValue: DataTypes.UUIDV4,
             allowNull: false,
             primaryKey: true,
           },
        
        nroTransaction: { 
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'None',
        },
    });
}
