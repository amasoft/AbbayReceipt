const Sequelize = require("sequelize");
require("dotenv/config");

const db = {};
const sequelize = new Sequelize(
  process.env.DB,
  process.env.SQL_USERNAME,
  process.env.SQL_PASSWORD,
  {
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    dialect: "mssql",
    dialectOptions: {
      options: {
        requestTimeout: 120000,
        enableArithAbort: true,
        // encrypt: true,
      },
    },
  }
);

console.log(sequelize);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer_Receipt = require("../models/Transaction")(sequelize, Sequelize);
module.exports = db;
