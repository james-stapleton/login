


const router = require('express').Router();
const sequelize = require('../../config/connection');
const {Cocktails, Users, UserCocktails} = require('../../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


//cocktail get routes
router.get('/', async (req,res) => {
    try {
        const cocktailData = await Cocktails.findAll();
        res.status(200).json(cocktailData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cocktailData = await Cocktails.findByPk(req.params.id);
        if (!cocktailData) {
            res.status(404).json({message: "No cocktail with that id"});
        }
        else {
        res.status(200).json(cocktailData);
    }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/name/:name', async (req,res) => {
    try {
        const cocktailData = await Cocktails.findOne( {where: {name: req.params.name}});
        res.status(200).json(cocktailData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/ing/:ing', async (req,res) => {
    console.log(req.params.ing);
    try {
        const cocktailData = await Cocktails.findAll( {
            where: {
                ingredients: {
                    [Op.like]: `%${req.params.ing}%`
                }
            }
        })
        res.status(200).json(cocktailData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//cocktail create route
router.post('/', async (req, res) => {
    try {
        const cocktailData = await Cocktails.create(req.body);
        res.status(200).json(cocktailData);
    } catch (err) {
        res.status(500).json(err);
    }
}); 

//cocktail update route
router.put('/:id', async (req,res) => {
    try {
        const cocktailData = await Cocktails.update(req.body, {where: {id: req.params.id}});
        res.status(200).json(cocktailData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//cocktail delete route
router.delete('/:id', async (req,res) => {
    try {
        const cocktailData = await Cocktails.destroy({where: {id: req.params.id}});
        res.status(200).json(cocktailData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;