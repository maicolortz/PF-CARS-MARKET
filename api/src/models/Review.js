const { DataTypes } = require('sequelize');

// Create Schema
module.exports = (sequelize) => {
sequelize.define('review', {
    rating:{
        type:DataTypes.FLOAT,
        defaultValue:0
    },
    description:{
        type:DataTypes.STRING
    }
},{timestamps : false})
}