const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Users, Cocktails, UserCocktails } = require('../../models');
const User = require('../../models/Users');

router.get('/', async (req, res) => {
    try {
        const [results, metadata] = await sequelize.query("SELECT cocktails.name, AVG(user_cocktails.rating) AS 'Rating' FROM cocktails JOIN user_cocktails ON cocktails.id = user_cocktails.cocktail_id WHERE user_cocktails.rating IS NOT NULL GROUP BY user_cocktails.cocktail_id ORDER BY AVG(rating) DESC;");

        console.log("results ",results);
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/ratings', async (req,res) => {
    console.log("Hello I am here")
    try {

        console.log("results ",results);
        res.status(200).json(results);
    } catch (err) {
        res.json(err);
    }
});

// add new saved drink route
// requires userId and cocktailID
router.post('/', async (req,res) => {
    try {
        const createData = await UserCocktails.upsert(req.body);
        res.status(200).json(createData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete saved drink route
// delete by userId and cocktailID??

router.delete('/', async (req,res) => {
    try { 
        console.log(req.body);
        console.log(req.body.userId);
        console.log(req.body.cocktailId);
        console.log("----------------------------------------------------------------");
        const deleteData = await UserCocktails.destroy( {where: {"userId": req.body.userId, "cocktailId": req.body.cocktailId} } );
        res.status(200).json(deleteData);

    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;