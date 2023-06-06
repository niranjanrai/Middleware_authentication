const authMiddleware = require("./authMiddleware");
const express = require("express");
const app = express();

app.post("/api/posts", authMiddleware, (req, res) => {
  // Process the post data
  // Send the post data as a response
});

app.post("/api/posts", authMiddleware, (req, res) => {
  const postData = req.body; // Assuming you have a request body containing post data
  // Process the post data
  // Send the post data as a response
  res.json(postData);
});
