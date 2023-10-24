const dbConnect = require("./mongoConnect");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "max 5" },
    {
      $set: { name: "max pro 5", price: 1000 },
    }
  );
  console.log(result);
};

updateData();
