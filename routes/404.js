const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../Util/path");

router.use((req, res, next) => {
  res.status(404).render("404", { docTitle: "Page Not Found!" });
});
module.exports = router;
