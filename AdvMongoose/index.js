const express = require("express");
require("./config");
const product = require("./product");

const app = express();
app.use(express.json()); // makes data into readable format
app.post("/create", async (req, res) => {
  let data = new product(req.body); // From postman the data will be added according to schema
  const result = await data.save();
  // will save into mongo database
  // console.log(req.body);
  res.send(result);
});

app.get("/list", async (req, res) => {
  // this will get the data from mongodb and will display it
  let data = await product.find();
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  let data = await product.deleteOne(req.params);
  res.send(data);
}); /// to delete

app.put("/update/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await product.updateOne(req.params, { $set: req.body });
  resp.send(data);
}); // updating

app.listen(5000);
