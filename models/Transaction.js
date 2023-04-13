const mongoose = require("mongoose");
const receiptSchema = new mongoose.Schema(
  {
    branchID: {
      type: String,
      required: [true, "please provide branch id"],
    },
    branchName: {
      type: String,
      required: [true, "please provide branch Name"],
    },
    transactionId: {
      type: String,
      required: [true, "please provide transcation Id"],
      unique: true,
    },
    transactionDate: {
      type: String,
      required: [true, "please provide transcation Date"],
    },
    accountNumber: {
      type: String,
      required: [true, "please provide account Number"],
      min: 10,
      max: 10,
    },
    accountName: {
      type: String,
      required: [true, "please provide account Name"],
    },
    transactionDescription: {
      type: String,
      required: [true, "please provide Description of transaction"],
    },
    amountInWords: {
      type: String,
      required: [true, "please provide the amount in words"],
    },
    amountInNumbers: {
      type: String,
      required: [true, "please provide the amount in Numbers"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Customer_Receipt", receiptSchema);
