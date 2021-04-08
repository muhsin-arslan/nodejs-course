const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post");

const app = express();

app.use(express.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://127.0.0.1", { useNewUrlParser: true })
  .then((result) => {
    console.log(result);

    // Create
    // Post.create({ title: "Hello World", content: "Hello world content." });

    // List
    // const cursor = Post.find({})
    //   .then((posts) => {
    //     console.log(posts);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Delete
    // Post.findOneAndDelete({ title: "Hello World" }, function (err) {
    //   if (err) console.log(err);
    //   console.log("Successful deletion");
    // });

    app.listen(3000);
  })
  .catch((error) => {
    console.log(error);
  });
