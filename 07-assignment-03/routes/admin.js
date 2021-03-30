const express = require("express");
const path = require("path");
const rootDir = require("../helpers/path");

const router = express.Router();

router.get("/users", (request, response, next) => {
  response.sendFile(path.join(rootDir, "views", "users.html"));
});

router.post("/users", (request, response, next) => {
  console.log(request.body.username);
  response.redirect("/admin/users");
});

module.exports = router;
