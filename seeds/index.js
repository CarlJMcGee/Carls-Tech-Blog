const seedUsers = require("./users-seed");

const sequelize = require("../config/connection");

const seedAll = async function () {
  await sequelize.sync({ force: true });
  console.log(`\n----DATABASE SYNCED----\n`);
  await seedUsers();
  console.log(`\n----Users Seeded----\n`);

  process.exit(0);
};

seedAll();
