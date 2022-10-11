const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('car', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    marca: {
      type: DataTypes.STRING, 
    },
    modelo: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    año: {
      type: DataTypes.INTEGER,
    },
    km: {
      type: DataTypes.INTEGER,
    },
    
  });
};
