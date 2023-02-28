const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    category: String,
    image: String,
    location: String,
    price: Number,
    postedAt: String,
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("Product", postSchema);

module.exports = {
  ProductModel
};
