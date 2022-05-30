const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// get all comments
router.get("/", async (req, res) => {
  const posts = await Post.findAll({
    include: [
      {
        model: User,
        attributes: {
          exclude: ["password"],
        },
      },
    ],
    attributes: {
      exclude: ["user_id"],
    },
  });
  res.json(posts);
});

module.exports = router;
