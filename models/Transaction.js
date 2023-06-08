module.exports = (sequelize, Sequelize) => {
  const Customer_Receipt = sequelize.define(
    "Customers_Receipt",
    {
      branchCode: {
        type: Sequelize.STRING,
      },
      branchName: {
        type: Sequelize.STRING,
      },
      transactionId: {
        type: Sequelize.STRING,
      },
      transactionDate: {
        type: Sequelize.STRING,
      },
      accountNumber: {
        type: Sequelize.STRING,
      },
      accountName: {
        type: Sequelize.STRING,
      },
      transactionDescription: {
        type: Sequelize.STRING,
      },
      amountInWords: {
        type: Sequelize.STRING,
      },
      amountInNumbers: {
        type: Sequelize.STRING,
      },
      tellerId: {
        type: Sequelize.STRING,
      },
      Currency: {
        type: Sequelize.STRING,
      },
      depositorName: {
        type: Sequelize.STRING,
      },
      dateAdded: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      benefactor: {
        type: Sequelize.STRING,
      },
      chequeNumber: {
        type: Sequelize.STRING,
      },
      mcNumber: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.STRING,
      },
      transactiontype: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return Customer_Receipt;
};
