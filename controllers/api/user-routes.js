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
  res.status(201).send(`User #${userID.id}: ${req.body.username} created.`);
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
  res.status(202).send(`User #${user.id}: ${user.username} updated`);
});

// delete user
router.delete("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    attributes: {
      exclude: ["password"],
    },
  });
  const deletedUser = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  const usersPosts = await Post.update(
    { user_id: 999999 },
    {
      where: {
        user_id: null,
      },
    }
  );
  const userComments = await Comment.update(
    { user_id: 999999 },
    {
      where: {
        user_id: null,
      },
    }
  );
  res.status(202).send(`User #${user.id}: ${user.username} deleted`);
});

// login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res.status(400).json({ message: "Incorrect email or password." });
      return;
    }
    req.session.regenerate((err) => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;

      req.session.save(() => {
        res.status(200).send(`User ${dbUserData.username} is logged in`);
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
