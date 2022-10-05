const { Ratings } = require('../models');

const ratingData = [
    {
        "userId": 1,
        "cocktailId": 1, 
        "rating": 5,
    },
    {
        "userId": 1,
        "cocktailId": 2, 
        "rating": 5,
    },
    {
        "userId": 2,
        "cocktailId": 1, 
        "rating": 3,
    },
    {
        "userId": 2,
        "cocktailId": 2, 
        "rating": 1,
    },
];

const seedRatings = () => Ratings.bulkCreate(ratingData);

module.exports = seedRatings;