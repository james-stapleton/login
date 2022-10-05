const { UserCocktails, Cocktails } = require('../models');

const userCocktailsData = [
    {
        userId: 1,
        cocktailId: 1, 
        rating: 1,
        saved: true
    },
    // {
    //     userId: 1,
    //     cocktailId: 2,
    //     rating: 10,
    //     saved: true
    // },
    // {
    //     userId: 2,
    //     cocktailId: 1,
    //     rating: 8,
    // },
    // {
    //     userId: 3,
    //     cocktailId: 2,
    //     rating: 8,
    //     saved: true
    // },
];

const seedUserCocktailsData = () => UserCocktails.bulkCreate(userCocktailsData);

module.exports = seedUserCocktailsData;