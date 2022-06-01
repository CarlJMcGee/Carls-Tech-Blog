const User = require("./USER");
const Post = require("./POST");
const Comment = require("./COMMENT");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
  hooks: true,
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
  hooks: true,
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };
