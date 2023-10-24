const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LearningBackEnd");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("names", productSchema);
  let data = new Product({
    name: "max 100",
    price: 200,
    brand: "maxx",
    category: "Mobile",
  });
  const result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("names", productSchema);
  let data = await Product.updateOne(
    { name: "max 6" },
    {
      $set: { price: 550, name: "max pro 6" },
    }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const Product = mongoose.model("names", productSchema);
  let data = await Product.deleteOne({ name: "max 100" });
  console.log(data);
};
const findInDB = async () => {
  const Product = mongoose.model("names", productSchema);
  let data = await Product.find({ name: "max 6" });
  console.log(data);
};

findInDB();
