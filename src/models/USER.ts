const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(loginPw: string) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init({
  id: {
    type: Datatypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
});

export {};
