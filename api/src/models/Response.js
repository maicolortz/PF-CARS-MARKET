const { DataTypes } = require('sequelize');

// Create Schema
module.exports = (sequelize) => {
sequelize.define('response', {
    userId: { 
    type: DataTypes.INTEGER,
 },
  description: {
    type: DataTypes.STRING(1000),
    required: true,
//    allowNull: false,
  }
});

}