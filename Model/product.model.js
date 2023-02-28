const mongoose = require("mongoose");

const postClassifiedsSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    category: { type: String, require: true },
    image: { type: String, require: true },
    location: { type: String, require: true },
    postedAt: {
      type: Date,
      default: Date.now,
    },
    price:{type:Number,require:true},
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("Product", postClassifiedsSchema);

module.exports = {
  ProductModel,
};
