const router = require("express").Router();
const { User, Post, Comment } = require("../../models/index");

// get all users
router.get("/", async (req, res) => {
  const users = await User.findAll({});
  res.json(users);
});

// get all user posts
router.get("/posts", async (req, res) => {
  const users = await User.findAll({
    include: [
      {
        model: Post,
        attributes: {
          exclude: ["user_id"],
        },
      },
    ],
    attributes: {
      exclude: ["password"],
    },
  });
  res.json(users);
});

module.exports = router;
