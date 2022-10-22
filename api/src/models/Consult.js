const { DataTypes } = require('sequelize');

// Create Schema
module.exports = (sequelize) => {
sequelize.define('consult', {
  // id: {
  //   type: DataTypes.UUID,
  //   defaultValue: DataTypes.UUIDV4,
  //   primaryKey: true,
  //   allowNull: false,
  // },

  userId: { 
    type: DataTypes.INTEGER,
 },
  description: {
    type: DataTypes.STRING(1000),
    required: true,
//    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
  },
  

});

}
