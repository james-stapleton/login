const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Ratings, Users, Cocktails } = require('../../models');

router.get('/', async (req,res) => {
    try {
        const [results, metadata] = await sequelize.query("SELECT cocktail_id, cocktails.name, AVG(ratings.rating) AS 'Rating' FROM ratings JOIN cocktails ON ratings.cocktail_id = cocktails.id GROUP BY cocktail_id ORDER BY AVG(rating) DESC;");
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req,res) => {
    try {
        const newRating = Ratings.upsert(req.body);
        res.status(200).json(newRating);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;