const { DataTypes } = require('sequelize');

// Create Schema
module.exports = (sequelize) => {
sequelize.define('user', {
  name: {
    type: DataTypes.String,
    required: true
  },
  email: {
    type: DataTypes.String,
    required: true,
    unique: true
  },
  password: {
    type: DataTypes.String,
    required: true
  },
  register_date: {
    type: DataTypes.Date,
    default: Date.now
  },

});

}
