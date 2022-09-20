const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errRoutes = require("./routes/404");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);
app.use(errRoutes);

app.listen(3000);
