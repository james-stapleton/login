router = require('express').Router();
const { Users, Cocktails, UserCocktails } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await Users.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


//! -----------------------------------------------------------------------Old Routes


// User get methods
router.get('/', async (req,res) => {
    try {
        const userData = await Users.findAll({include: Cocktails, through: UserCocktails}, {where: saved = true} );
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req,res) => {
    try {
        const userData = await Users.findByPk( req.params.id, {include: Cocktails, through: UserCocktails }, {where: saved = true} );
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//User create method
router.post('/', async (req,res) => {
    try {
        const userData = await Users.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//User update method
router.put('/:id', async (req,res) => {
    try {
    const updateData = await Users.update(req.body, {where: {id: req.params.id} }); 
    // res.send(200).json(updateData);
    } catch (err) {
        console.log(err);
    }
});

//User delete method
router.delete('/:id', async (req, res) => {
    try {
      const userData = await Users.destroy({
        where: { id: req.params.id }
      });
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
