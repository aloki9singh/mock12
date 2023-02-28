const express = require("express");
const cors = require("cors");
const { connection } = require("./Config/db");
const { productRouter } = require("./Routes/product.route");

const app = express();
require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// server.use(express.urlencoded());
app.get("/", (req, res) => {
  res.send("Welcome to OLX Classifieds API");
});
app.use("/api", productRouter);
app.listen(process.env.PORT, async (req, res) => {
  try {
    await connection;
    console.log("Connected to Mongo Db");
  } catch (err) {
    console.log({ err: err });
  }
  console.log(`Server Running on Port ${process.env.PORT}`);
});
