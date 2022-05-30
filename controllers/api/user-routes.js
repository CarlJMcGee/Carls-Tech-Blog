const router = require("express").Router();
const { User, Post, Comment } = require("../../models/index");

// get all users
router.get("/", async (req, res) => {
  const users = await User.findAll({});
  res.json(users);
});

module.exports = router;
