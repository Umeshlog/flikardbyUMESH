const express = require("express");
// import express from "express";
// import dotenv from "dotenv";
const dotenv = require("dotenv");
// import connection from "./database/db.js";
const connection = require("./database/db");
// import defaultdata from "./default.js";
const defauldata = require("./default.js");
// import bodyParser from "body-parser";
// import bodyParser from "body-parser";
// import bodyParser from "body-parser";
const bodyParser = require("body-parser");
// import cors from "cors";
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

// import router from "./routese/routese.js";
const router = require("./routese/routese");
dotenv.config();

const app = express();

// app.use("module");

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/", router);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const port = 8000;
connection(username, password);
app.listen(port, () => console.log(`server successfully is port no.${port}`));

//defauldata to database
defauldata();

let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
let paytmParams = {};
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"] = uuidv4();
paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"] = "100";
paytmParams["CALLBACK_URL"] = "http://localhost:8000/callback";
paytmParams["EMAIL"] = "umeshpatel271201@gmail.com";
paytmParams["MOBILE_NO"] = "1234567890";

// module.exports = paytmMerchantKey;
// module.exports = paytmParams;
module.exports = { paytmParams, paytmMerchantKey };
