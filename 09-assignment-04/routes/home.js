const express = require("express");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (request, response, next) => {
  response.render("home", { pageTitle: "Homepage", users: adminData.users });
});

module.exports = router;
