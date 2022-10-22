// Inicializamos sequelize

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('favority', {
        userId: { 
            type: DataTypes.INTEGER,
//             primaryKey: true,
//            allowNull: false,
         },
//         carId: { 
//              type: DataTypes.INTEGER,
// //             primaryKey: true,
// //             allowNull: false,
//           },
         

    },{timestamps : false});
}
