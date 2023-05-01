const Message = require("../models/message");

const MyError = require("../utils/myError");
const asyncHandler = require("../middleWare/asyncHandler");

exports.getMessages = asyncHandler(async (req, res, next) => {
  const messages = await Message.find({});

  res.status(200).json({
    success: true,
    data: messages,
  });
});

exports.getRoomMessage = asyncHandler(async (req, res, next) => {
  const messages = await Message.findById(req.params.id);

  if (!messages) throw new MyError("room not found", 404);

  res.status(200).json({
    success: true,
    data: messages,
  });
});

exports.writeMessage = asyncHandler(async (req, res, next) => {
  const message = await Message.create(req.body);

  res.status(200).json({
    success: true,
    data: message,
  });
});

exports.updateMessage = asyncHandler(async (req, res, next) => {
  const message = await Message.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { new: true, runValidators: true }
  );

  if (!message) throw new MyError("message not found", 404);

  res.status(200).json({
    success: true,
    data: message,
  });
});

exports.deleteMessage = asyncHandler(async (req, res, next) => {
  const message = await Message.findByIdAndUpdate(req.params.id);

  if (!message) throw new MyError("message not found", 404);

  res.status(200).json({
    success: true,
  });
});
