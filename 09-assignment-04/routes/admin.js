const express = require("express");

const router = express.Router();

const users = [];

router.get("/add-user", (request, response, next) => {
  response.render("add-user", { pageTitle: "Add User" });
});

router.post("/add-user", (request, response, next) => {
  const user = {
    firstName: request.body.firstName,
  };
  users.push(user);
  response.redirect("/");
});

module.exports = {
  users,
  router,
};
