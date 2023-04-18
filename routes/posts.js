const router = require("express").Router();
const { constrainedMemory } = require("process");
const Transaction = require("../models/Transaction");
const path = require("path");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

var transValidate = [
  check("branchID", "branchID value is missing").notEmpty(),
  check("branchName", "branchName value is missing").notEmpty(),
  check("transactionId", "transactionId value is missing")
    .notEmpty()
    .isLength({ min: 12, max: 12 })
    .withMessage("transactionId must be  12 numbers"),
  check("transactionDate", "transactionDate value is missing").notEmpty(),
  check("accountNumber", "accountNumber value is missing").notEmpty(),
  check("accountName", "accountName value is missing").notEmpty(),
  check("transactionDescription", "accountName value is missing").notEmpty(),
  check("amountInWords", "amountInWords value is missing").notEmpty(),
  check("amountInNumbers", "amountInNumbers value is missing").notEmpty(),
  check("tellerId", "tellerId value is missing").notEmpty(),
  check("depositorName", "depositorName value is missing").notEmpty(),
  check("Currency", "Currency value is missing").notEmpty(),
];
let tokenval;

router.post("/token", async (req, res) => {
  tokenval = jwt.sign({ info: "transaction" }, "humanBakingId", {
    expiresIn: 60,
  });
  return res.status(201).json({
    status: 201,
    message: "token generated succesfully",
    token: tokenval,
  });
});
router.post("/", transValidate, async (req, res) => {
  const apiKey = req.headers;
  // const token = req.headers.authorization.split(" ")[1];
  // const decodedToken = jwt.verify(token, "secretkeyappearshere");

  // console.log({ token: token, status: decodedToken });

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } else {
    if (apiKey.apikey !== "pdxfGxFDYuTRt633jKi230MQUT785PkR") {
      res.status(500).json({
        message: "Invalid Api Key",
        error: "Invalid Api key",
      });
    }
    const getReceipt = await Transaction.find({
      transactionId: req.body.transactionId,
    });
    if (getReceipt.length > 0) {
      return res.status(201).json({
        status: 201,
        message: "Reciept Already Exist! you can print using tellerID",
      });
    }
    console.log(getReceipt);

    try {
      const AddTransaction = new Transaction(req.body);
      const savedtransaction = await AddTransaction.save();
      if (savedtransaction) {
        res.status(200).json({
          status: 200,
          message: "transaction Receipt succesfully Saved!",
          url: `https://ambprintsol.netlify.app/receipt/:id=${savedtransaction.transactionId}`,
          // data: savedtransaction,
        });
      }
    } catch (err) {
      console.log("error occured " + err);
      res.status(500).json({
        message: "error saving Receipt",
        error: err,
      });
    }
  }
});

//reate post
router.post("/", transValidate, async (req, res) => {
  console.log("headers");
  const apiKey = req.headers;

  const errors = validationResult(req);
  console.log("my val" + errors);

  if (apiKey.apikey === "pdxfGxFDYuTRt633jKi230MQUT785PkR") {
    // const AddTransaction = new Transaction(req.body);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    //check if transaction exist
    const getReceipt = await Transaction.find({
      transactionId: req.body.transactionId,
    });
    console.log(getReceipt);
    // try {
    //   const AddTransaction = new Transaction(req.body);

    //   //check if transaction exist
    //   // const getReceipt = await Transaction.find({
    //   //   transactionId: req.body.transactionId,
    //   // });
    //   // console.log("getrecipt");
    //   // // console.log(getReceipt._id);
    //   // if (getReceipt) {
    //   //   console.log("receipt already exist");
    //   //   return res.status(201).json({
    //   //     message: "receipt already exist",
    //   //     status: 201,
    //   //   });
    //   // }

    //   const savedtransaction = await AddTransaction.save();
    //   if (savedtransaction) {
    //     //send data to frontend
    //     res.status(200).json({
    //       status: 200,
    //       message: "transaction Receipt succesfully Saved!",
    //       url: `https://ambprintsol.netlify.app/`,
    //       data: savedtransaction,
    //     });
    //     // res.sendFile(path.join(__dirname, "..", "build", "index.html"));
    //   }
    // } catch (err) {
    //   // res.status(500).json(err);
    //   console.log("error occured " + err);
    //   res.status(500).json({
    //     message: "error saving Receipt",
    //     error: err,
    //   });
    // }
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
          message: "transaction Receipt found!",
          data: getSingleReceipts,
        });
        // res.sendFile(path.join(__dirname, "..", "build", "index.html"));
      } else {
        res.status(404).json({
          status: 404,
          message: "transaction Receipt not found!",
        });
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
