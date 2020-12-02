const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App started at port ${PORT}...`);
});

app.get("/", (req, res, next) => {
  res.send("Hello, CI!");
});

app.get("/index.json", (req, res, next) => {
  res.send("{message: 1}");
});
