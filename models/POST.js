const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 500],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    hooks: {
      afterUpdate: async (postData) => {
        console.log(postData);
        if (postData.user_id === null) {
          postData.user_id = "DELETED";
        }
        return postData;
      },
      afterBulkUpdate: async (postData) => {
        console.log(postData);
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "post",
    underscored: true,
  }
);

module.exports = Post;
