const router = require("express").Router();
const { User, Post, Comment } = require("../../models/index");

// get all comments
router.get("/", async (req, res) => {
  const comments = await Comment.findAll({
    include: [
      {
        model: Post,
        attributes: {
          exclude: ["user_id"],
        },
      },
      {
        model: User,
        attributes: {
          exclude: ["password"],
        },
      },
    ],
    attributes: {
      exclude: ["user_id", "post_id"],
    },
  });
  res.json(comments);
});

module.exports = router;
