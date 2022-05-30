const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// get all comments
router.get("/", async (req, res) => {
  const posts = await Post.findAll({});
  res.json(posts);
});

module.exports = router;
