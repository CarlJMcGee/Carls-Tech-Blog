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
router.get("/find/:id", async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  res.json(post);
});

// get post's comments from id
router.get("/find/:id/comments", async (req, res) => {
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

// get posts with deleted users
router.get("/deleted", async (req, res) => {
  const deletedUsers = await Post.findAll({
    where: {
      user_id: 999999,
    },
    attributes: {
      exclude: ["user_id"],
    },
  });
  res.json(deletedUsers);
});

// post new post
router.post("/", async (req, res) => {
  const newPost = await Post.create(req.body);
  const post = await Post.findOne({
    where: {
      title: req.body.title,
    },
  });
  res.status(201).send(`Post #${post.id}: ${post.title} created`);
});

// put update to post content
router.put("/find/:id", async (req, res) => {
  const deletedUsers = await Post.findAll({
    where: {
      user_id: 999999,
    },
  });
  const deletedUsersPid = deletedUsers.map((post) => post.id.toString());
  if (deletedUsersPid.includes(req.params.id)) {
    res
      .status(423)
      .send(
        `This user who created this post has been deleted and therefor this post is now archived`
      );
  } else {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const post = await Post.findByPk(req.params.id);
    res.status(202).send(`Post #${post.id}: ${post.title} updated`);
  }
});

// delete post
router.delete("/find/:id", async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  const deletedPost = await Post.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(202).send(`Post #${post.id}: ${post.title} removed`);
});

module.exports = router;
