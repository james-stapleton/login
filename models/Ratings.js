const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const Cocktails = require('./Cocktails');
const Users = require('./Users');

class Ratings extends Model {}
    Ratings.init (
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            rating: {
                type: DataTypes.DECIMAL,
                allowNull: true,
            }
        },
        {
            sequelize, 
            underscored: true,
            timestamps: false,
            freezeTableName: true,
            modelName: "ratings"
        }
        
    )

    module.exports = Ratings;