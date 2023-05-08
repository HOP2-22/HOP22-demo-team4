const Payment = require("../models/payment");

const MyError = require("../utils/myError");
const asyncHandler = require("../middleWare/asyncHandler");

exports.getPayments = asyncHandler(async (req, res, next) => {
  const payments = await Payment.find({});

  if (!payments || payments.length === 0)
    throw new MyError("There are no Payments", 404);

  res.status(200).json({
    success: true,
    data: payments,
  });
});

exports.getPayment = asyncHandler(async (req, res, next) => {
  const payments = await Payment.findById({});

  if (!payments || payments.length === 0)
    throw new MyError("There are no Payments", 404);

  res.status(200).json({
    success: true,
    data: payments,
  });
});

exports.createPayment = asyncHandler(async (req, res, next) => {
  const payment = await Payment.create(req.body);

  if (!payment) throw new MyError("Error on creating payment", 403);

  res.status(200).json({
    success: true,
    data: payment,
  });
});

exports.deletePayment = asyncHandler(async (req, res, next) => {
  const payment = await Payment.findByIdAndDelete(req.body.paymentId);

  if (!payment)
    throw new MyError(
      "There is no payment with this " + req.body.paymentId + " ID",
      200
    );

  res.status(200).json({
    success: true,
    data: payment,
  });
});
