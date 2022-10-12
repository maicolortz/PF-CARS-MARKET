// Inicializamos sequelize

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('transaction', {
        id: { 
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
        
        nroTransaction: { 
            type: DataTypes.STRING,
            allowNull: false,
        },

        type:{
            type: DataTypes.ENUM,
            values: ["Compra","Venta"],
            allowNull: false,
        },
        invoiced:{
            type: DataTypes.DECIMAL(13,2),
        },
        
        paymentMethod:{
            type: DataTypes.STRING,
        // Tarjeta Credito, Tarjeta Debito, Deposito, Rapipago...
        },
        date:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW, 
        },

    },{timestamps : false});
}
