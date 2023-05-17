const Chatroom = require("../models/chatroom");
const User = require("../models/user");

const MyError = require("../utils/myError");
const asyncHandler = require("../middleWare/asyncHandler");

exports.getRooms = asyncHandler(async (req, res, next) => {
  const rooms = await Chatroom.find({}).populate("messages");

  res.status(200).json({
    success: true,
    data: rooms,
  });
});

exports.getRoom = asyncHandler(async (req, res, next) => {
  const room = await Chatroom.findById(req.params.roomId).populate("messages");

  if (!room) throw new MyError("Room not found", 404);

  res.status(200).json({
    success: true,
    data: room,
  });
});

exports.createRoom = asyncHandler(async (req, res, next) => {
  const chatroom = await Chatroom.create(req.body);

  req.body.members.map(async (memberId) => {
    try {
      const user = await User.findById(memberId);

      if (!user) throw new MyError("User not found", 400);

      user.chatrooms = [...user.chatrooms, chatroom.id];

      user.userFavorite = user.userFavorite.filter(
        (item) => item !== req.body.accountId
      );

      await user.save();

      const account = await User.findByIdAndUpdate(req.body.userId, {
        sold: true,
      });
    } catch (error) {
      console.log(error);
    }
  });

  res.status(200).json({
    success: true,
  });
});

exports.deleteRoom = asyncHandler(async (req, res, next) => {
  const room = await Chatroom.findById(req.params.roomId);

  if (!room) throw new MyError("Room not found", 404);

  await room.remove();

  res.status(200).json({
    success: true,
    data: room,
  });
});
