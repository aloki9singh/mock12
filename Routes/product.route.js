const express = require("express");
const { ProductModel } = require("../Model/product.model");

const productRouter = express.Router();

productRouter.post("/post", (req, res) => {

  try {
    const product = new ProductModel(req.body);
     product.save();
    res.json({
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
//category name page
// - Filter by Category (Clothing, Electronics, Furniture, Other)
// - Sort by date (based on the posted date)
// - Search by product name
// - Pagination (4 Cards per page)
productRouter.get("/browse", async (req, res) => {
  const page = req.query.page || 1;
  try {
    if (req.query == "category") {
      const products = await ProductModel.find({
        category: req.query.category,
      })
        .limit(4)
        .skip(page * 4);
      res.status(201).json({
        success: true,
        msg: "Product is Posted Successfully",
        products: products,
      });
    } else if (req.query == "name") {
      const products = await ProductModel.find({
        category: req.query.name,
      })
        .limit(4)
        .skip(page * 4);
      res.status(201).json({
        success: true,
        msg: "Product is Posted Successfully",
        products: products,
      });
    } else {
      const products = await ProductModel.find()
        .limit(4)
        .skip(page * 4);
      res.status(201).json({
        success: true,
        msg: "Product is Posted Successfully",
        products: products,
      });
    }
  } catch (err) {
    res.send({
      success: true,
      msg: "Product Post Error!",
      err: err,
    });
  }
});

module.exports = {
  productRouter,
};
