const router = require('express').Router();
const { Users, Cocktails } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
      }
    res.render('homepage', {  
      logged_in: req.session.logged_in,
      user_id: req.session 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// !----------------------------------------------------------------------------Old Routes

router.get('/recipe/:name', async (req,res) => {

    try {
      if (!req.session.logged_in) {
        res.redirect('/login');
        return;
      }
      const cocktailData = await Cocktails.findOne( {where: {name: req.params.name}});
      cocktail = {
        id: cocktailData.id,
        name: cocktailData.name,
        ingredients: cocktailData.ingredients,
        instructions: cocktailData.instructions,
        image: cocktailData.image,
        views: cocktailData.views,
      }
        res.render('recipe', {id: cocktailData.id,
          name: cocktailData.name,
          ingredients: cocktailData.ingredients,
          instructions: cocktailData.instructions,
          image: cocktailData.image,
          views: cocktailData.views, 
          user_id: req.session.user_id});        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/ratings', async (req,res) => {
    try {
        res.render('ratings');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/viewed', async (req, res) => {
    try {
        res.render('views');
    } catch (err) {
        res.json(err);
    }
});

router.get('/saved', async (req, res) => {
    try {
      if (!req.session.logged_in) {
        res.redirect('/login');
        return;
      }
        res.render('saved-drinks', {user_id: req.session.user_id});
    } catch (err) {
        res.json(err);
    }
});


module.exports = router;
