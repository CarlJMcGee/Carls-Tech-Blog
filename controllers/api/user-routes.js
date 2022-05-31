const router = require("express").Router();
const { User, Post, Comment } = require("../../models/index");

// get all users
router.get("/", async (req, res) => {
  const users = await User.findAll({});
  res.json(users);
});

// get all users' posts
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

// get all users' comments
router.get("/comments", async (req, res) => {
  const users = await User.findAll({
    include: [
      {
        model: Comment,
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

// get user from id
router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

// get user's posts
router.get("/:id/posts", async (req, res) => {
  const user = await User.findByPk(req.params.id, {
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
  res.json(user);
});

// get user's comments
router.get("/:id/comments", async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    include: [
      {
        model: Comment,
        attributes: {
          exclude: ["user_id", "post_id"],
        },
      },
    ],
    attributes: {
      exclude: ["password"],
    },
  });
  res.json(user);
});

// create new user
router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  const userID = await User.findOne({
    where: {
      username: req.body.username,
    },
  });
  res.status(201).send(`User #${userID.id} ${req.body.username} created.`);
});

router.put("/:id", async (req, res) => {
  const userUpdate = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(202).send(`User #${user.id}: ${user.username}`);
});

module.exports = router;
