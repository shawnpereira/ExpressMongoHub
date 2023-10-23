const express = require("express");
const dbConnect = require("./mongoConnect");

const app = express();
//displays data from mongoDB
app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();

  console.log(data);

  res.send({
    data,
  });
});

app.listen(5000);
