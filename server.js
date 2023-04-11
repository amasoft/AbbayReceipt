const mongoose = require("mongoose");
const app = require("./app");
// import mongoose from "mongoose";
// import app from './'
const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.CONNECTIONURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
  })
  .then((result) => {
    console.log("Database connection successfull");
    console.log(`app listen port ${port}`);
    app.listen(port);
  })
  .catch((err) => console.log(err));
