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
        res.status(201).json({
          status: 201,
          transactionType: "Cheque Book",
          message: "transaction Receipt succesfully Saved!",
          url: `https://ambprintsol.netlify.app/cheque/${req.body.transactionId}`,
        });
      } else {
        //return deposite enpoints
        res.status(201).json({
          status: 201,
          transactionType: "Deposit",
          message: "transaction Receipt succesfully Saved!",
          url: `https://ambprintsol.netlify.app/receipt/${req.body.transactionId}`,
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "error saving Receipt",
      error: err,
    });
  }
};
exports.getReceiptByTransactionId = async (req, res) => {
  console.log("transactionId  " + req.params.transactionId);
  try {
    const result = await customer_receipt.findOne({
      where: { transactionId: req.params.transactionId },
    });
    console.log("option " + JSON.stringify(result));
    if (result !== null) {
      return res.status(200).json({
        status: 200,
        message: "Receipt succesfully Retrieved!",
        data: result,
      });
    }
    return res.status(401).json({
      status: 404,
      message: "No receipt found!",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error getting Receipt details!",
      error: error,
    });
  }
};

exports.getAllReceipts = async (req, res) => {
  // const { tellerId, branchCode } = req.query;
  const { tellerId, branchCode } = req.body;
  try {
    const data = await customer_receipt.findAndCountAll({
      where: {
        tellerId: tellerId,
        branchCode: branchCode,
        transactiontype: "Deposit",
        transactionDate: {
          [Op.gte]: moment().subtract(3, "days").format("YYYY-MM-DD hh:mm:ss"),
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
    return res.status(404).json({
      status: 404,
      message: "Receipts not found",
    });
  } catch (error) {
    res.send({
      message: "Error retrieving receipt",
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
  if (Isupdate > 0) {
    return res.status(200).json({
      status: 200,
      message: "update  succesfully!",
    });
  } else {
    return res.status(500).json({
      status: 500,
      message: "Error Updating receipt!",
    });
  }
};

const generatemcNumber = () => {
  let rand = Math.floor(Math.random() * 100); // standard 0-99 random formula
  let val = rand > 9 ? rand.toString() : "0" + rand;
  var year = moment().format("YYYY");
  var month = moment().format("MM");
  var seconds = moment().format("ss");
  const mcNUmber = year + month + seconds + val;
  console.log(0, mcNUmber);
  return mcNUmber;
};
