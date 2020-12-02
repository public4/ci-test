const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App started at port ${PORT}...`);
});

app.get("/", (req, res, next) => {
  res.send("Hello, CI! All work Okayyy and gooood!");
});

const j = {
  message: "OK",
  status: 200,
  value: "some-long-value",
  PORT,
};

app.get("/index.json", (req, res, next) => {
  res.send(JSON.stringify(j));
});
