const express = require("express");

const { protect, authorize } = require("../middleWare/protect");

const {
  getPayments,
  createPayment,
  deletePayment,
} = require("../controller/payment");

const router = express.Router();

router.route("/").get(getPayments).post(createPayment).delete(deletePayment);

module.exports = router;
