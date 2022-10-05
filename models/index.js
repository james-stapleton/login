const Users = require('./Users');
const Cocktails = require('./Cocktails');
const UserCocktails = require('./UserCocktails');
const Ratings = require('./Ratings');

Users.belongsToMany(Cocktails, {through: UserCocktails});
Cocktails.belongsToMany(Users, {through: UserCocktails});

    // Users.belongsToMany(Cocktails, {through: Ratings});
    // Cocktails.belongsToMany(Users, {through: Ratings});

module.exports = {Users, Cocktails, UserCocktails, Ratings};
