const User = require("../models/user");
const Account = require("../models/account");

const MyError = require("../utils/myError");
const asyncHandler = require("../middleWare/asyncHandler");

exports.addFavorite = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.body.userId);

  if (!user)
    throw new MyError(
      "There is no user with this " + req.body.userId + " ID",
      200
    );

  user.userFavorite.push(req.body.accountId);

  user.save();

  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.removeFavorite = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.body.userId).populate("userFavorite");

  if (!user)
    throw new MyError(
      "There is no user with this " + req.body.userId + " ID",
      200
    );

  const newUser = await User.updateOne(
    { _id: req.body.userId },
    { $pull: { userFavorite: { $in: [`${req.body.accountId}`] } } }
  );

  if (newUser.modifiedCount === 1)
    throw new MyError(
      "There is no account with this " + req.body.accountId + " ID"
    );

  res.status(200).json({
    success: true,
  });
});

exports.clearFavorite = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.body.userId);

  if (!user)
    throw new MyError(
      "There is no user with this " + req.body.userId + " ID",
      200
    );

  user.userFavorite = [];

  user.save();

  res.status(200).json({
    success: true,
    data: user,
  });
});
