const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/LearningBackEnd");
  //Connect Mongoose to mongodb database

  const productSchema = new mongoose.Schema({
    name: String,
  });
  //Writing a schema

  const ProductsModel = mongoose.model("names", productSchema);
  //generating a model and telling it that in "names"collection, use the above schema

  let data = new ProductsModel({ name: "hi" });
  //inserting dummy data into the model

  let result = await data.save();
  console.log(result);
};
main();
