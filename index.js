const reqFilter = require("./Egmiddleware");
const express = require("express");
const app = express();

//////////////////////////////////////
const route = express.Router();
route.use(reqFilter);
app.use("/", route);
// replace app with route to apply middleware on that page
///////////////////////////////////////////////////////////
app.use(reqFilter); //use this to input middle ware inside the function as the home page

app.get("/", reqFilter, (req, res) => {
  res.send("This is a home page");
});
////////////////////////////////////////////////////////////
app.get("/About", (req, res) => {
  res.send("Hi This is a About us page");
});

app.get("/Intro", (req, res) => {
  res.send("This is a Intro page");
});

route.get("/Profile", (req, res) => {
  res.send("This is a Profile page");
});

app.listen(4500);
