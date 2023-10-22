/// Always make seperate file for connection, this code can be used for connection purposes

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const databaseName = "LearningBackEnd";

const client = new MongoClient(url);

const dbConnect = async () => {
  let result = await client.connect();
  db = result.db(databaseName);
  return db.collection("names");
};

module.exports = dbConnect;
