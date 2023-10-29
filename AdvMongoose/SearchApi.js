const express = require("express");
require("./config");
const product = require("./product");
const app = express();

app.use(express.json());

//we put key to get the value
app.get("/search/:key", async (req, resp) => {
  let data = await product.find({
    $or: [
      //regex is used to search
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  resp.send(data);
});

app.listen(5000);
