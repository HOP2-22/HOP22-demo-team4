const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: false,
    default: this.name,
  },
});

paymentSchema.pre("save", function (next) {
  this.code = this.name;
  next();
});

const Payment = mongoose.model("payments", paymentSchema);

module.exports = Payment;
