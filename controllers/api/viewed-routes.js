const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Cocktails } = require('../../models');

router.get('/', async (req,res) => {
    try {
        const [results, metadata] = await sequelize.query(`SELECT name, views FROM cocktails ORDER BY views DESC;`);
        console.log(results);
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:name', async (req,res) => {
    try {
        const [results, metadata] = await sequelize.query(`UPDATE cocktails SET views = views + 1 WHERE name = '${req.params.name}';`);
        console.log(results);
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;