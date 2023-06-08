const router = require("express").Router();
const { constrainedMemory } = require("process");
const Transaction = require("../models/Transaction");
const path = require("path");
const DBservice = require("../server");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const transController = require("../controller/transaction.controller");

router.post("/", transController.addRecipt);
router.get("/:transactionId", transController.getReceiptByTransactionId);
router.get("/", transController.getAllReceipts);
router.put("/", transController.updateStatus);

module.exports = router;
