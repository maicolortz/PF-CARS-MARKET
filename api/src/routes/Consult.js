const { DataTypes } = require('sequelize');

// Create Schema
module.exports = (sequelize) => {
sequelize.define('consult', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    required: true,
    allowNull: false,
    default: Date.now,
  },
  

});

}
