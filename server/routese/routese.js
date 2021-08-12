// import express from "express";
const express = require("express");
// import User from "../modle/userSchema";
const User = require("../modle/userSchema");
const Product = require("../modle/product_schema");
const paytmChecksum = require("../paytm/PaytmChecksum");
const paytmMerchantKey = require("../index");
const paytmParams = require("../index");

const router = express.Router();

// router.post("/sighnup", async (req, res) => {
//   console.log("hello sighn up page");
//   try {
//     const exist = await User.findOne({ username: req.body.username });
//     if (exist) {
//       return res.status(401).json("username allready exist");
//     } else {
//       console.log("user is not define");
//       const user = req.body;
//       const newUser = new User(user);
//       const sighnupuser = await newUser.save();

//       res.status(200).json("user successfull register");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

router.post("/sighnup", async (req, res) => {
  const { firstname, lastname, username, email, password, phone } = req.body;

  if (!firstname || !lastname || !username || !email || !password || !phone) {
    return res.status(422).json({ error: " plzz filled the field propraly" });
  }

  try {
    const userExist = await User.findOne({ username: req.body.username });

    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    } else {
      const user = new User({
        firstname,
        lastname,
        username,
        email,
        password,
        phone,
      });

      // const userRegister =
      const userRegister = await user.save();

      res.status(201).json({ message: "user register successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      return res.status(200).json(`${req.body.username}Login succcessfull`);
    } else {
      return res.status(401).json("Envailid login");
    }
  } catch (error) {
    console.log("error:", error.message);
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log("error:", error.message);
  }
});

router.get("/product/:id", async (req, response) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    response.json(product);
  } catch (error) {
    console.log("error:", error.message);
  }
});

router.post("/payment", async (req, response) => {
  let paytmChecksums = paytmChecksum.generateSignature(
    paytmParams,
    paytmMerchantKey
  );
  try {
    let params = {
      ...paytmParams,
      CHECKSUMHASH: paytmChecksums,
    };

    response.json(params);
  } catch (error) {
    console.log("error while coll paytm", error);
  }
});
module.exports = router;
