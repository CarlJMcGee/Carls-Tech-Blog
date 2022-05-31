const User = require("../models/USER");

const UserList = [
  {
    username: "user_1",
    email: "your@e.mail",
    password: "mypassword",
  },
  {
    username: "user_2",
    email: "facebook@is.evil",
    password: "insecurepassword",
  },
  {
    username: "user_3",
    email: "google@is.evil",
    password: "anotherpassword",
  },
  {
    username: "user_4",
    email: "twitter@is.thedevil",
    password: "passwordnummervier",
  },
  {
    username: "user_5",
    email: "iverunout@of.emails",
    password: "andpasswords",
  },
  {
    username: "user_6",
    email: "joe@ma.ma",
    password: "deeznutzgotem",
  },
];

const seedUsers = () =>
  User.bulkCreate(UserList, {
    individualHooks: true,
  });

module.exports = seedUsers;
