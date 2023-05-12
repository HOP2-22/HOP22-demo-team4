const Account = require("../models/account");

const User = require("../models/user");
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

  await user.save();

  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.removeFavorite = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.body.userId);

  if (!user)
    throw new MyError(
      "There is no user with this " + req.body.userId + " ID",
      200
    );

  const newUser = await User.updateOne(
    { _id: req.body.userId },
    { $pull: { userFavorite: { $in: [`${req.body.accountId}`] } } }
  );

  res.status(200).json({
    success: true,
  });
});

exports.buyAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.findByIdAndUpdate(req.body.accountId, {
    sold: true,
  });

  if (!account)
    throw new MyError(
      "There is no account with this " + req.body.accountId + " ID",
      200
    );

  const user = await User.findById(req.body.userId);

  if (!user)
    throw new MyError(
      "There is no user with this " + req.body.userId + " ID",
      200
    );

  user.purchasedAccounts = [...user.purchasedAccounts, req.body.accountId];

  let newFavorite;

  newFavorite = user.userFavorite.filter(
    (item) => item + "" !== req.body.accountId
  );

  user.userFavorite = newFavorite;

  await user.save();

  res.status(200).json({
    success: true,
    data: user,
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

  await user.save();

  res.status(200).json({
    success: true,
    data: user,
  });
});
