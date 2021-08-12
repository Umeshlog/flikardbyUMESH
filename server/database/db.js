// import mongoose from "mongoose";
const mongoose =require("mongoose");

const connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.7rnud.mongodb.net/flipkard?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("connection successfull");
  } catch (error) {
    console.log("error :", error.message);
  }
};

module.exports= connection;
