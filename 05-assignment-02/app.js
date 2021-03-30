const express = require("express");

const app = express();

app.use((request, response, next) => {
  console.log("This is first middleware");
  next();
});

app.use((request, response, next) => {
  console.log("This is second middleware");
  next();
});

app.use("/users", (request, response, next) => {
  response.send(
    `
        <h1>Users</h1>
        <ul>
            <li>User 01</li>
            <li>User 02</li>
        </ul>
        <a href="/">Return homepage</a>
    `
  );
});

app.use("/", (request, response, next) => {
  response.send(
    `
            <h1>Homepage</h1>
            <a href="/users">Go to users page</a>
        `
  );
});

app.listen(3000);
