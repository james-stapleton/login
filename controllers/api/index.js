const router = require('express').Router();

const userRoutes = require('./userRoutes');
const cocktailRoutes = require('./cocktail-routes');
const userCocktailRoutes = require('./join-table-routes');
const ratingsRoutes = require('./ratings-routes');
const viewedRoutes = require('./viewed-routes');

router.use('/users', userRoutes);
router.use('/cocktails', cocktailRoutes);
router.use('/usercocktails', userCocktailRoutes);
router.use('/ratings', ratingsRoutes);
router.use('/viewed', viewedRoutes);

module.exports = router;
