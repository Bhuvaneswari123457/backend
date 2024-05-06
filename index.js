const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send(`hello world`);
});
app.get("/twitter", (req, res) => {
  res.send("hii twitter");
});
app.get("/login", (req, res) => {
  res.send(`<h1>chai with biscuit</h1>`);
});
app.listen(process.env.PORT, () => {
  console.log(`example app listening on port  ${port}`);
});
