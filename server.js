// import { database } from "./database";
const database = require("./database/connection");
// require("./models/students");
const service = {
  async addReceipt(payload) {
    try {
      const [result, metadata] = await database.sequelize.query(
        `
          INSERT INTO [customer_receipt].[dbo].[Customers_Receipts]
          (
            [branchCode]
            ,[branchName]
            ,[transactionId]
            ,[transactionDate]
            ,[accountNumber]
            ,[accountName]
            ,[transactionDescription]
            ,[amountInWords]
            ,[amountInNumbers]
            ,[tellerId]
            ,[Currency]
            ,[depositorName]
            ,[dateAdded]
            ,[status]
            ,[benefactor]
            ,[mcNumber]
            ,[chequeNumber]
            ,[transactiontype]
          )

          VALUES (
            :branchCode
            ,:branchName
            ,:transactionId
            ,:transactionDate
            ,:accountNumber
            ,:accountName
            ,:transactionDescription
            ,:amountInWords
            ,:amountInNumbers
            ,:tellerId
            ,:Currency
            ,:depositorName
            ,:dateAdded
            ,:status
            ,:benefactor
            ,:mcNumber
            ,:chequeNumber
            ,:transactiontype
          )
        `,
        {
          replacements: payload,
          type: database.sequelize.QueryTypes.RAW,
        }
      );
      return metadata;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getReceipt() {
    try {
      console.log(database.sequelize);
    } catch (error) {
      console.log("errors " + error);
    }
  },

  async getReceiptById(id) {
    console.log("id   " + id);
    const infor = await database.Customer_Receipt.findOne({
      where: { transactionId: id },
    });
    console.log("infor " + infor);
    // .then((data) => {
    //   if (data) {
    //     console.log("infor exist");
    //     console.log(data);
    //   } else {
    //     console.log("infor !exist");
    //   }
    // })
    // .catch((err) => {
    //   res.status(500).send({
    //     message: "Error retrieving Tutorial with id=" + id,
    //     err,
    //   });
    // });
  },
};

module.exports = service;
// export default service;
