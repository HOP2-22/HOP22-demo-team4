const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  writer: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "users",
  },
  chatroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chatrooms",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("messages", messageSchema);

module.exports = Message;
