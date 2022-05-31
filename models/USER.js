const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        console.log(newUserData);
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },

      beforeBulkUpdate: async (updatedUserData) => {
        console.log(updatedUserData);
        updatedUserData.attributes.password = await bcrypt.hash(
          updatedUserData.attributes.password,
          10
        );
        return updatedUserData;
      },

      async beforeUpdate(updatedUserData) {
        updatedUserData.password = bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "user",
    underscored: true,
  }
);

module.exports = User;
