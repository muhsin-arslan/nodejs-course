const express = require("express");

const app = express();

app.use("/home", (request, response, next) => {
  response.send("<h1>Hello from Express.js</h1>");
});

app.use("/", (request, response, next) => {
  response.send('<a href="/home">Go to Home</a>');
});

app.listen(3000);
