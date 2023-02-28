const express = require("express");
const { ProductModel } = require("../Model/product.model");

const productRouter = express.Router();

productRouter.post("/postClassified", (req, res) => {
  const payload = req.body;

  try {
    const product = new ProductModel(payload);
    product.save();
    res.status(201).json({
      success: true,
      msg: "Product is Posted Successfully",
      product: product,
    });
  } catch (err) {
    res.send({
      success: true,
      msg: "Product Post Error!",
      err: err,
    });
  }
});
// - Filter by Category (Clothing, Electronics, Furniture, Other)
// - Sort by date (based on the posted date)
// - Search by product name
// - Pagination (4 Cards per page)
productRouter.get("/browseClassified", (req, res) => {
    if(query=="")
  

  try {
    const product = new ProductModel(payload);
    product.save();
    res.status(201).json({
      success: true,
      msg: "Product is Posted Successfully",
      product: product,
    });
  } catch (err) {
    res.send({
      success: true,
      msg: "Product Post Error!",
      err: err,
    });
  }
});

module.exports={
    productRouter
}