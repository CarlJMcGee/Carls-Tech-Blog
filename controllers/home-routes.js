const router = require("express").Router();
const { User, Post, Comment } = require("../models");

router.use("/dashboard", async (req, res, next) => {
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

  console.log(profile);
  res.render("dashboard", {
    loggedIn: req.session.loggedIn,
    user: profile,
  });
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  res.redirect("/");
});

module.exports = router;
