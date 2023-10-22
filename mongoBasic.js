const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const databaseName = "LearningBackEnd"; //name of database
//you can connect multiple
const client = new MongoClient(url);
const getData = async () => {
  try {
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection("names");
    let data = await collection.find({}).toArray();
    console.log(data);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    await client.close(); // Close the MongoDB connection
  }
};

getData();
