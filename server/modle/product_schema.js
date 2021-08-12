// import mongoose from "mongoose";
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  description: String,
  discount: String,
  tagline: String,
});

const product = mongoose.model("product", productSchema);

module.exports = product;