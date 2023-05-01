const express = require("express");

const { protect, authorize } = require("../middleWare/protect");

const {
  getRooms,
  createRoom,
  deleteRoom,
  getRoom,
} = require("../controller/chatroom");

const router = express.Router();

router.route("/").get(getRooms).post(createRoom);

router.route("/:roomId").get(getRoom).post(deleteRoom);

module.exports = router;
