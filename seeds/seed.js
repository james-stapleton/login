const sequelize = require('../config/connection');
const seedCocktails = require('./cocktailData');
const seedUsers = require('./userData');
const seedUserCocktails = require('./userCocktailsData');
const seedRatings = require('./ratingsDating');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCocktails();

  await seedUsers();

  await seedUserCocktails();

  await seedRatings();

  process.exit(0);
};

seedAll();
