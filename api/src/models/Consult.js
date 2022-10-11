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
  descripcion: {
    type: DataTypes.String,
    required: true,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.String,
    required: true,
    allowNull: false,
  },
  

});

}
