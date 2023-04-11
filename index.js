// imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const commentsRoute = require("./routes/comments");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

//middlewares
app.use(cors({ origin: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(express.json());
var bodyParser = require("body-parser");
app.use(bodyParser.json());
dotenv.config();
dotenv.config({ path: "./config.env" });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/comments", commentsRoute);
app.use("/", (req, res) => {
  res.send("welcome from router folder");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    // cb(null,req.body.name)
    cb(null, req.body.name);
  },
});
module.exports = app;
