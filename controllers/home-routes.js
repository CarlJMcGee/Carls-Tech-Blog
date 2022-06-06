const router = require("express").Router();
const { User, Post, Comment } = require("../models");

router.use("/dashboard", async (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  next();
});

router.use("/posts", async (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  next();
});

router.get("/", async (req, res) => {
  const postData = await Post.findAll({
    include: [
      {
        model: User,
        as: "OP",
        attributes: {
          exclude: ["password"],
        },
      },
      {
        model: Comment,
        attributes: {
          exclude: ["user_id", "post_id"],
        },
        include: {
          model: User,
          as: "commenter",
          attributes: {
            exclude: ["password"],
          },
        },
      },
    ],
    limit: 6,
    order: [["id", "DESC"]],
  });

  const posts = postData.map((post) => {
    return post.get({ plain: true });
  });

  res.render("homepage", {
    loggedIn: req.session.loggedIn,
    post: posts,
  });
});

router.get("/dashboard", async (req, res) => {
  const profileData = await User.findByPk(req.session.userId, {
    include: {
      model: Post,
      attributes: {
        exclude: ["user_id"],
      },
    },
  });
  const profile = profileData.get({ plain: true });

  res.render("dashboard", {
    loggedIn: req.session.loggedIn,
    user: profile,
  });
});

router.get("/posts/:id", async (req, res) => {
  const postData = await Post.findByPk(req.params.id, {
    attributes: {
      exclude: ["user_id"],
    },
    include: [
      {
        model: User,
        as: "OP",
        attributes: {
          exclude: ["password"],
        },
      },
      {
        model: Comment,
        attributes: {
          exclude: ["user_id", "post_id"],
        },
        include: {
          model: User,
          as: "commenter",
          attributes: {
            exclude: ["password"],
          },
        },
        separate: true,
        order: [["id", "DESC"]],
      },
    ],
    order: [["createdAt", "DESC"]],
  });
  const post = postData.get({ plain: true });

  post.createdAt = post.createdAt
    .toDateString()
    .split(" ")
    .splice(1, 3)
    .join(" ");

  post.updatedAt = post.updatedAt
    .toDateString()
    .split(" ")
    .splice(1, 3)
    .join(" ");

  post.comments.map((comment) => {
    comment.createdAt = comment.createdAt
      .toDateString()
      .split(" ")
      .splice(1, 3)
      .join(" ");
  });

  console.log(post);

  res.render("post-details", {
    loggedIn: req.session.loggedIn,
    post: post,
  });
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  res.redirect("/");
});

module.exports = router;
