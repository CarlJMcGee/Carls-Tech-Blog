const express = require("express");
// const sequelize = require("./config/connection");
const path = require("path");
const exprsHand = require("express-handlebars");
const { urlencoded } = require("express");
const hbs = exprsHand.create({});
const app = express();
const PORT = process.env.PORT || 3001;
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.send(`Server test successful.`);
});
app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}`));
