const router = require("express").Router();
const User = require("../models/User");
const Transaction = require("../models/Transaction");
const becrypt = require("bcrypt");

//reate post
router.post("/", async (req, res) => {
  const AddTransaction = new Transaction(req.body);
  try {
    const savedtransaction = await AddTransaction.save();
    if (savedtransaction) {
      //send data to frontend
      res.status(200).json({
        status: 200,
        message: "transaction succesful!",
        data: savedtransaction,
      });
    }
  } catch (err) {
    // res.status(500).json(err);
    console.log("error occured " + err);
    res.status(500).json({
      message: "error adding post",
      error: err,
    });
  }
});

module.exports = router;
