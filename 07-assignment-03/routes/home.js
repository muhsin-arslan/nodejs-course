const express = require("express");
const path = require("path");
const rootDir = require("../helpers/path");

const router = express.Router();

router.get("/", (request, response, next) => {
  response.sendFile(path.join(rootDir, "views", "index.html"));
});

module.exports = router;
