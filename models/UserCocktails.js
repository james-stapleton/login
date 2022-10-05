const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Cocktails = require('./Cocktails');
const Users = require('./Users');

class UserCocktails extends Model {} 
    UserCocktails.init (
        {
            saved: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: true
            },
            rating: {
                type: DataTypes.INTEGER,
            }
    },
    {
        timestamps: false,
        underscored: true,
        sequelize,
        freezeTableName: true,
        modelName: 'user_cocktails',
      },
    );

module.exports = UserCocktails;