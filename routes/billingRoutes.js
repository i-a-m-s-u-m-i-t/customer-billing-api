const express = require("express");
const router = express.Router();

const billingController = require("../controllers/billingController");

router.post("/create", billingController.createBilling);
router.get("/all", billingController.getBilling);

module.exports = router;
