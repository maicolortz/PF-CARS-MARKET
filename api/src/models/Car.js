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
      get(){
        const lower = this.getDataValue('name');
        return lower ? lower.toLowerCase() : null;
      }
    },
    brand: {
      type: DataTypes.STRING, 
      allowNull:false,
      required: true,
      /* get(){
        const lower = this.getDataValue('brand');
        return lower ? lower.toLowerCase() : null;
      } */
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
    descriptionLong: {
      type: DataTypes.STRING(1000),
      allowNull:false,
      required: true,
    },
    image: {
      type: DataTypes.STRING(500),
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
    premium: { // Que debería hacer con esto
      type: DataTypes.BOOLEAN,
      //allowNull: false,
      defaultValue: false,
    },
  });
};
