const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  title: {
    type: String,
    maxLength: 40,
  },
  createdUser: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("requests", requestSchema);

module.exports = Message;
