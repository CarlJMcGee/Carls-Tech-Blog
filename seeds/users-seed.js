const User = require("../models/USER");

const UserList = [
  {
    username: "Lucias",
    email: "your@e.mail",
    password: "mypassword",
  },
  {
    username: "Malayor",
    email: "facebook@is.evil",
    password: "insecurepassword",
  },
  {
    username: "Maybe_Goblins",
    email: "google@is.evil",
    password: "anotherpassword",
  },
  {
    username: "hplikelike",
    email: "twitter@is.thedevil",
    password: "passwordnummervier",
  },
  {
    username: "Frickin_Green",
    email: "iverunout@of.emails",
    password: "andpasswords",
  },
  {
    username: "Divine_Smite",
    email: "joe@ma.ma",
    password: "deeznutzgotem",
  },
  {
    username: "Ranger_Ridiculous",
    email: "ryan@is.cool",
    password: "hatesElves",
  },
];

const seedDeleted = () =>
  User.create(
    {
      id: 999999,
      username: "DELETED",
      email: "N_A@DELETED.DELETED",
      password: "passpasspass",
    },
    {
      individualHooks: true,
    }
  );

const seedUsers = () =>
  User.bulkCreate(UserList, {
    individualHooks: true,
  });

module.exports = {
  seedUsers,
  seedDeleted,
};
