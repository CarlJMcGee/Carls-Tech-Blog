const router = require("express").Router();
const { User, Post, Comment } = require("../models");

router.use("/dashboard", async (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
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
    limit: 3,
  });

  const posts = postData.map((post) => {
    return post.get({ plain: true });
  });

  console.log(posts);

  res.render("homepage", {
    loggedIn: req.session.loggedIn,
    post: posts,
  });
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  res.redirect("/");
});

module.exports = router;
