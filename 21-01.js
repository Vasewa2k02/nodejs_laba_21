const PORT = 3000;
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars").create({ extname: ".hbs" });

const phonebookRouter = require("./routes/phonebookRouter");

const app = express();
app.engine(".hbs", hbs.engine);
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(path.resolve(__dirname, "styles")));
app.use(express.static(path.resolve(__dirname, "jsClient")));
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", phonebookRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
