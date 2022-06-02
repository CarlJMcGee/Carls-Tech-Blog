const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
const exprsHand = require("express-handlebars");
const { urlencoded } = require("express");
const session = require("express-session");

const hbs = exprsHand.create({});
const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  session({
    secret: "Jotaro is best JoJo",
    resave: false,
    saveUninitialized: false,
  })
);
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send(`<h1>Homepage</h1>`);
});
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}`));
});
