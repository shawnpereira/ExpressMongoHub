const express = require("express");
const dbConnect = require("./mongoConnect");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const db = await dbConnect();
    const collection = db.collection("names");
    const data = await collection.find().toArray();
    res.send(data);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error); // Log detailed error message
    res.status(500).send("Error fetching data from MongoDB");
  }
});

app.post("/", async (req, res) => {
  try {
    const db = await dbConnect();
    const collection = db.collection("names");
    const result = await collection.insertOne(req.body);
    res.status(201).send({
      message: "Data added successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Error inserting data into MongoDB:", error);
    res.status(500).send("Error inserting data into MongoDB");
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
