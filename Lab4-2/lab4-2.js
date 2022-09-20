const express = require("express");
const app = express();
const path = require("path");

const indexRoutes = require("./routes/index");
const usersRoutes = require("./routes/users");

app.use(usersRoutes);
app.use(indexRoutes);
app.use(express.static(path.join(__dirname, "public")));

app.listen(9001);
