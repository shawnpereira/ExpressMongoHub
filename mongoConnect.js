const { MongoClient } = require("mongodb");

async function dbConnect() {
  const client = new MongoClient("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db("LearningBackEnd"); // Replace 'your_database_name' with your actual database name
    return db; // Return the database instance, NOT the client instance
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

module.exports = dbConnect;
