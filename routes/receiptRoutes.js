const router = require("express").Router();
const transController = require("../controller/transaction.controller");
router.post("/", transController.addRecipt);
router.get("/:transactionId/", transController.getReceiptByTransactionId);
// router.get("/", transController.getAllReceipts);
router.post("/allTransation", transController.getAllReceipts);
router.put("/", transController.updateStatus);

module.exports = router;
