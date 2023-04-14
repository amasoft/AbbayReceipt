const router = require("express").Router();
const { constrainedMemory } = require("process");
const Transaction = require("../models/Transaction");
const path = require("path");

//reate post
router.post("/", async (req, res) => {
  console.log("headers");
  console.log(req.body.transactionId);
  const apiKey = req.headers;

  if (apiKey.apikey === "pdxfGxFDYuTRt633jKi230MQUT785PkR") {
    // const AddTransaction = new Transaction(req.body);
    try {
      const AddTransaction = new Transaction(req.body);

      //check if transaction exist
      // const getReceipt = await Transaction.find({
      //   transactionId: req.body.transactionId,
      // });
      // console.log("getrecipt");
      // // console.log(getReceipt._id);
      // if (getReceipt) {
      //   console.log("receipt already exist");
      //   return res.status(201).json({
      //     message: "receipt already exist",
      //     status: 201,
      //   });
      // }
      const savedtransaction = await AddTransaction.save();
      if (savedtransaction) {
        //send data to frontend
        res.status(200).json({
          status: 200,
          message: "transaction Receipt succesfully Saved!",
          data: savedtransaction,
        });
        // res.sendFile(path.join(__dirname, "..", "build", "index.html"));
      }
    } catch (err) {
      // res.status(500).json(err);
      console.log("error occured " + err);
      res.status(500).json({
        message: "error saving Receipt",
        error: err,
      });
    }
  } else {
    res.status(500).json({
      message: "Invalid Api Key",
      error: "Invalid Api key",
    });
  }
});

router.get("/", async (req, res) => {
  console.log("headers");
  console.log(req.body.transactionId);
  const AddTransaction = new Transaction(req.body);
  try {
    const getAllReceipts = await Transaction.find({});
    if (getAllReceipts.length > 0) {
      //send data to frontend
      res.status(200).json({
        status: 200,
        message: "Receipts succesfully Retrieved!",
        data: getAllReceipts,
      });
      // res.sendFile(path.join(__dirname, "..", "build", "index.html"));
    }
  } catch (err) {
    // res.status(500).json(err);
    console.log("error getting receipts " + err);
    res.status(500).json({
      message: "error getting receipts",
      error: err,
    });
  }
});

router.get("/:transactionId", async (req, res) => {
  const { transactionId } = req.params;
  const apiKey = req.headers;
  console.log("apiKey id" + JSON.stringify(apiKey));
  if (apiKey.apikey === "pdxfGxFDYuTRt633jKi230MQUT785PkR") {
    try {
      const getSingleReceipts = await Transaction.findOne({
        transactionId: transactionId,
      });
      if (getSingleReceipts) {
        //send data to frontend
        res.status(200).json({
          status: 200,
          message: "Receipt succesfully Retrieved!",
          data: getSingleReceipts,
        });
        // res.sendFile(path.join(__dirname, "..", "build", "index.html"));
      }
    } catch (err) {
      // res.status(500).json(err);
      console.log("error getting receipts " + err);
      res.status(500).json({
        message: "error getting receipt",
        error: err,
      });
    }
  } else {
    res.status(500).json({
      message: "Invalid Api Key",
      error: "Invalid Api key",
    });
  }
});

module.exports = router;
