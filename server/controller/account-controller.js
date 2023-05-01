const Account = require("../models/account");

const MyError = require("../utils/myError");
const asyncHandler = require("../middleWare/asyncHandler");

exports.createAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.create(req.body);

  if (!account.category)
    throw new MyError(
      "There is no category with this " + req.body.category + " ID",
      200
    );

  if (!account.owner)
    throw new MyError(
      "There is no category with this " + req.body.owner + " ID",
      200
    );

  res.status(200).json({
    success: true,
    data: account,
  });
});

exports.updateAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.findById(req.params.id)
    .populate(["category", "owner"])
    .exec();

  if (!account)
    throw new MyError(
      "There is no account with this " + req.params.id + " ID",
      200
    );

  for (let item in req.body) {
    account[item] = req.body[item];
  }

  await account.save();

  res.status(200).json({
    success: true,
    data: account,
  });
});

exports.deleteAccount = asyncHandler(async (req, res, next) => {
  req.body.updatedUser = req.userId;

  const account = await Account.findById(req.params.id).populate("category");

  if (!account)
    throw new MyError(
      "There is no account with this " + req.params.id + " ID",
      200
    );

  account.remove();

  res.status(200).json({
    success: true,
    data: account,
  });
});
