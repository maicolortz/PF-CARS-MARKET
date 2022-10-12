const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('car', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      
    },
    brand: {
      type: DataTypes.STRING, 
      allowNull:false,
      required: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull:false,
      required: true,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    color: {
      type: DataTypes.STRING,
    },
    oil: {
      type: DataTypes.STRING,
    },
    gate: {
      type: DataTypes.STRING,
    },
    kilometres: {
      type: DataTypes.INTEGER,
    },
    descriptionShort: {
      type: DataTypes.STRING,
      allowNull:false,
      required: true,
    },
    descripcionLong: {
      type: DataTypes.STRING,
      allowNull:false,
      required: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    price: {
    type: DataTypes.DECIMAL(15,2),
    },
    condition: {
      type: DataTypes.ENUM('Nuevo','Usado'),
    },
    transmition: {
      type: DataTypes.ENUM('Automatico','Sincronico'),
    },
  });
};
