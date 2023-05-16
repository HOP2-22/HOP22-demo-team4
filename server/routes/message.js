const express = require("express");

const { protect, authorize } = require("../middleWare/protect");

const {
  writeMessage,
  getMessages,
  getRoomMessage,
  updateMessage,
  deleteMessage,
} = require("../controller/message");

const router = express.Router();

router.route("/").get(getMessages).post(writeMessage);
router.route("/:id").get(getRoomMessage).put(updateMessage).post(deleteMessage);

module.exports = router;
