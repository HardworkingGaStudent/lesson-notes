// setup express
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("listening");
});

// routes
app.get("/Homer", (req, res) => {
  res.send("hello homer");
});
app.get("/Marge", (req, res) => {
  res.send("hello marge");
});
app.get("/Bart", (req, res) => {
  res.send("hello bart");
});
app.get("/Lisa", (req, res) => {
  res.send("hello lisa");
});
app.get("/Maggie", (req, res) => {
  res.send("hello maggie");
});
app.get("/Snowball+II", (req, res) => {
  res.send("hello Snowball II");
});
app.get("/Santas+Little+Helper", (req, res) => {
  res.send("hello Santa's Little Helper");
});
