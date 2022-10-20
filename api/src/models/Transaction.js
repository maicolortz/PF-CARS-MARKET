// Inicializamos sequelize

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('transaction', {
        // id: { 
        //     type: DataTypes.UUID,
        //     defaultValue: DataTypes.UUIDV4,
        //     allowNull: false,
        //     primaryKey: true,
        //   },
        
        nroTransaction: { 
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'None',
        },

        type:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'None',
        },
        amount:{
            type: DataTypes.DECIMAL(13,2),
            defaultValue:0,
        },
        
        paymentMethod:{
            type: DataTypes.STRING,
        // Tarjeta Credito, Tarjeta Debito, Deposito, Rapipago...
            defaultValue: 'None',
        },
        date:{
            type: DataTypes.STRING,
        //    defaultValue: DataTypes.NOW, 
            defaultValue: 'None',
        },
        idTransaction: { 
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'None',
        },
        statusTransaction:{ 
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'None',
        },

    });
}
