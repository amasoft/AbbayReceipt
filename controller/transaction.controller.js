const { request } = require("http");
const db = require("../database/connection");
const moment = require("moment");
const { Op } = require("sequelize");
const customer_receipt = db.Customer_Receipt;
const DBservice = require("../server");
exports.addRecipt = async (req, res) => {
  try {
    //check if receipt exist
    const isTransactionId = await customer_receipt.findOne({
      where: { transactionId: req.body.transactionId },
    });
    if (isTransactionId) {
      return res.status(409).json({
        status: 409,
        message: "transaction Already Exists",
      });
    }
    var CurrentDate = moment().format("YYYY-MM-DD hh:mm:ss");
    req.body.dateAdded = CurrentDate;
    req.body.status = "";
    // check if transaction is MC
    if (req.body.chequeNumber) {
      req.body.transactiontype = "MC";
      req.body.mcNumber = generatemcNumber();
    } else {
      req.body.transactiontype = "Deposit";
    }
    console.log(12, JSON.stringify(req.body));
    const addTransaction = await DBservice.addReceipt(req.body);
    console.log(addTransaction);

    if (addTransaction) {
      if (req.body.chequeNumber) {
        //return check enpoints
        res.status(200).json({
          status: 200,
          transactionType: "Cheque Book",
          message: "transaction Receipt succesfully Saved!",
          url: `http://localhost:3000/cheque/${req.body.transactionId}`,
        });
      } else {
        //return deposite enpoints
        res.status(200).json({
          status: 200,
          transactionType: "Deposit",
          message: "transaction Receipt succesfully Saved!",
          url: `http://localhost:3000/${req.body.transactionId}`,
        });
      }
    }
  } catch (err) {
    console.log("error occured " + err);
    res.status(500).json({
      message: "error saving Receipt",
      error: err,
    });
  }
};
exports.getReceiptByTransactionId = async (req, res) => {
  console.log("transactionId  " + req.params.transactionId);
  await customer_receipt
    .findOne({
      where: { transactionId: req.params.transactionId },
    })
    .then((data) => {
      if (data) {
        res.status(200).json({
          status: 200,
          message: "Receipt succesfully Retrieved!",
          url: `http://localhost:3000/`,
          data: data,
        });
      } else {
        res.status(400).json({
          message: "Receipt not found",
          error: err,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving receipts with ",
        err,
      });
    });
};
exports.getAllReceipts = async (req, res) => {
  const { tellerId, branchCode } = req.body;
  try {
    const data = await customer_receipt.findAndCountAll({
      where: {
        tellerId: tellerId,
        branchCode: branchCode,
        transactiontype: "Deposit",
        created_at: {
          [Op.gte]: moment().subtract(90, "days").format("YYYY-MM-DD hh:mm:ss"),
        },
      },
    });
    if (data.rows.length > 0)
      return res.status(200).json({
        status: 200,
        message: "Receipts succesfully Retrieved!",
        total: data.count,
        data: data.rows,
      });
    // else {
    return res.status(500).json({
      message: "Receipts not found",
    });
    // }
  } catch (error) {
    res.send({
      message: "Error retrieving Tutorial with id=",
      error: error,
    });
  }
};

exports.updateStatus = async (req, res) => {
  //get the id of the transaction
  const { transactionId, status } = req.body;
  const Isupdate = await customer_receipt.update(
    {
      status: status,
    },
    {
      where: {
        transactionId: transactionId,
      },
    }
  );

  console.log(90, Isupdate);
};

const generatemcNumber = () => {
  let rand = Math.floor(Math.random() * 100); // standard 0-99 random formula
  let val = rand > 9 ? rand.toString() : "0" + rand;
  var year = moment().format("YYYY");
  var month = moment().format("MM");
  var seconds = moment().format("ss");
  const mcNUmber = year + month + seconds + val;
  console.log(00, mcNUmber);
  return mcNUmber;
};