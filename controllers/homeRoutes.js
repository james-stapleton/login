const router = require('express').Router();
const { User } = require('../models');
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

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
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
        const cocktailData = await Cocktails.findOne( {where: {name: req.params.name}});
        const cocktailObject = {
            cocktail: {
                id: cocktailData.id,
                name: cocktailData.name,
                ingredients: cocktailData.ingredients,
                instructions: cocktailData.instructions,
                rating: cocktailData.rating,
                views: cocktailData.views,
                image: cocktailData.image
            }
        }
        res.render('recipe', cocktailObject.cocktail);        
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
        res.render('saved-drinks');
    } catch (err) {
        res.json(err);
    }
});


module.exports = router;
