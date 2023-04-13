// imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const transactionRoute = require("./routes/posts");
const cors = require("cors");
const path = require("path");
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
//middlewares
app.use(cors({ origin: true }));
app.use(express.json());
var bodyParser = require("body-parser");
app.use(bodyParser.json());
dotenv.config();
dotenv.config({ path: "./config.env" });

const baseRoute = "/api/v1/";
app.use("/api/v1/receipt", transactionRoute);
app.use(baseRoute, (req, res) => {
  res.send("welcome from router folder");
});

module.exports = app;
