const mongoose = require("mongoose");
const CusTransaction = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "post title required"],
    },
    transactionId: {
      type: String,
      required: [true, "post contents title required"],
      unique: true,
    },
    beneficially: {
      type: String,
      required: [true, "beneficialy required"],
    },
    ammount: {
      type: String,
      required: [true, "ammount Id required"],
    },
    branchName: {
      type: String,
      required: [true, "branchName name required"],
    },
    transactionDate: {
      type: String,
      required: [true, "transactionDate is required"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Customer_transaction", CusTransaction);
