const router = require("express").Router();
const { User, Post, Comment } = require("../../models/index");
const { route } = require("./user-routes");

// get all comments
router.get("/", async (req, res) => {
  const comments = await Comment.findAll({
    include: [
      {
        model: User,
        as: "commenter",
        attributes: {
          exclude: ["password"],
        },
      },
      {
        model: Post,
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
        ],
      },
    ],
    attributes: {
      exclude: ["user_id", "post_id"],
    },
  });
  res.json(comments);
});

// get comment by id
router.get("/find/:id", async (req, res) => {
  const comment = await Comment.findByPk(req.params.id, {
    include: [
      {
        model: User,
        as: "commenter",
        attributes: {
          exclude: ["password"],
        },
      },
      {
        model: Post,
        include: [
          {
            model: User,
            as: "OP",
            attributes: {
              exclude: ["password"],
            },
          },
        ],
      },
    ],
  });
  res.json(comment);
});

// get all comments by post id
router.get("/post/:id", async (req, res) => {
  const comments = await Comment.findAll({
    where: {
      post_id: req.params.id,
    },
    attribute,
  });
});

// post new comment
router.post("/", async (req, res) => {
  const newComment = await Comment.create(req.body);
  const comment = await Comment.findOne({
    where: {
      content: req.body.content,
    },
  });
  res.status(201).send(`Comment #${comment.id} posted`);
});

// edit comment
router.put("/edit/:id", async (req, res) => {
  const updatedComment = await Comment.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  const comment = await Comment.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(202).send(`Comment #${comment.id} edited`);
});

// remove comment contents
router.delete("/remove/:id", async (req, res) => {
  const removedComment = await Comment.update(
    { content: "[REMOVED]" },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  const comment = await Comment.findByPk(req.params.id);
  res.status(202).send(`Comment #${comment.id} removed`);
});

// delete comment
router.delete("/delete/:id", async (req, res) => {
  const comment = await Comment.findOne({
    where: {
      id: req.params.id,
    },
  });
  const deletedComment = await Comment.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(202).send(`Comment #${comment.id} deleted`);
});

module.exports = router;
