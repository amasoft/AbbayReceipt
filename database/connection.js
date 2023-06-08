// import eequelize, { Sequelize } from "sequelize";
const Sequelize = require("sequelize");
require("dotenv/config");

const property = {
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  // host: process.env.SQL_HOST,
  // port: process.env.SQL_PORT,
  database: process.env.DB,
  // dialect: "mssql",
  // dialectOptions: {
  //   options: {
  //     requestTimeout: 120000,
  //     enableArithAbort: true,
  //   },
  // },
};

const db = {};
// const sequelize = new Sequelize(property);

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
        encrypt: true,
      },
    },
  }
);
// (async () => {
//   await sequelize.sync({ force: false });
//   console.log(" sync ");
// })();
console.log(sequelize);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer_Receipt = require("../models/Transaction")(sequelize, Sequelize);
module.exports = db;
