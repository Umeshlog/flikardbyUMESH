// import { products } from "./constant/product.js";
const products = require("./constant/product");
// import product from "./modle/product_schema.js";
const product = require("./modle/product_schema");
const defaultdata = async () => {
  try {
    await product.deleteMany({});
    await product.insertMany(products);
    console.log("data imported successfully");
  } catch (error) {
    console.log("eroor:", error.message);
  }
};

module.exports = defaultdata;
