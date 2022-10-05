const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cocktails extends Model {} 
    Cocktails.init (
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ingredients: {
        type: DataTypes.STRING,
        allowNull: false
      },
      instructions: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      views: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'cocktails',
    },
  );

module.exports = Cocktails;