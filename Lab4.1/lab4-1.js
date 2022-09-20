const exp = require("express");
const app = exp();

app.use("/users", (req, res, next) => {
  console.log(2);
  res.send("<p>The Middleware that handles just /users</p>");
});

app.use("/", (req, res, next) => {
  console.log(1);
  res.send("<p>The Middleware that handles just /</p>");
  next();
});
app.listen(3000);
