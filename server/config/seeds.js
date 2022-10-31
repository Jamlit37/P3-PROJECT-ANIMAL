const db = require('./connection');
const { User, Ticket } = require('../models');
const titleSeeds = require('./titleSeeds.json');
const userSeeds = require('./userSeeds.json');



db.once('open', async () => {
  await Ticket.deleteMany({});
  await Ticket.create(titleSeeds);

  await User.deleteMany({});
  await User.create(userSeeds);

  console.log('all seeded');
  process.exit(0);
});
