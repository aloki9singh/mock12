const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    category: String,
    image: String,
    location: String,
    price: Number,
    postedAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("Product", postSchema);

module.exports = {
  ProductModel,
};
