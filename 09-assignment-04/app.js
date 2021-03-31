const express = require("express");
const path = require("path");
const homeRoute = require("./routes/home");
const adminData = require("./routes/admin");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoute);
app.use("/admin", adminData.router);
app.use((request, response, next) => {
  response.status(404).render("404", { pageTitle: "Page not found" });
});

app.listen(3000);
