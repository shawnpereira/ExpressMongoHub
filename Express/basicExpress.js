const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("hello home");
});
//first para mai path then request then response
app.get("/about", (req, res) => {
  res.send("helldssdo jj");
});

app.listen(4500);
