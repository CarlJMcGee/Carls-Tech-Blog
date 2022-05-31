const sequelize = require("../config/connection");
const seedUsers = require("./users-seed");
const seedPosts = require("./post-seed");
const seedComments = require("./comment-seeds");

const seedAll = async function () {
  await sequelize.sync({ force: true });
  console.log(`\n----DATABASE SYNCED----\n`);

  await seedUsers();
  console.log(`\n----Users Seeded----\n`);

  await seedPosts();
  console.log(`\n----Posts Seeded----\n`);

  await seedComments();
  console.log(`\n----Comments Seeded----\n`);

  process.exit(0);
};

seedAll();
