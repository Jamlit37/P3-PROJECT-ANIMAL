const db = require('./connection');
const { User, Product, Ticket } = require('../models');
const titleSeeds = require('./titleSeeds.json');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');


db.once('open', async () => {
  await Ticket.deleteMany({});
  await Ticket.create(titleSeeds);

  await User.deleteMany({});
  await User.create(userSeeds);

  await Product.deleteMany({});
  await Product.create(productSeeds);

  console.log('all seeded');
  process.exit(0);
});
