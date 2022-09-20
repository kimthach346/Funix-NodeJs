const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/users", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "users.html"));
});
module.exports = router;
