// Inicializamos sequelize

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('favourite', {
        userId: { 
            type: DataTypes.INTEGER,
         },

         carId: { 
            type: DataTypes.UUID,
         },


    },{timestamps : false});
}
