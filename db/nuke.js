const mysql = require("mysql2");

const sequelize = require("../config/connection.js");

const NukeServer = async () => {
  const wipe = await sequelize.query(`DROP DATABASE IF EXISTS tech_blog_db;`);
  const reset = await sequelize.query(`CREATE DATABASE tech_blog_db;`);

  sequelize.sync({ force: false });
};

NukeServer();
