const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// get all posts
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

// get all posts' comments
router.get("/comments", async (req, res) => {
  const posts = await Post.findAll({
    include: [
      {
        model: Comment,
        attributes: {
          exclude: ["user_id", "post_id"],
        },
      },
    ],
  });
  res.json(posts);
});

// get post from id
router.get("/:id", async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  res.json(post);
});

// get post's comments from id
router.get("/:id/comments", async (req, res) => {
  const post = await Post.findByPk(req.params.id, {
    include: [
      {
        model: Comment,
        attributes: {
          exclude: ["user_id", "post_id"],
        },
      },
    ],
  });
  res.json(post);
});

module.exports = router;
