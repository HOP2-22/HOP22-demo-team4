const Account = require("../models/account");
const Category = require("../models/category");

const paginate = require("../utils/paginate");
const MyError = require("../utils/myError");

const asyncHandler = require("../middleWare/asyncHandler");

exports.getAccounts = asyncHandler(async (req, res, next) => {
  const books = await Account.find(req.query).populate("category");

  res.status(200).json({
    success: true,
    data: books,
  });
});

exports.getUserAccounts = asyncHandler(async (req, res, next) => {
  const accounts = await Account.find({ owner: req.params.ownerId })
    .populate({
      path: "category",
      select: "name",
    })
    .sort("createdAt")
    .limit(8);

  res.status(200).json({
    success: true,
    data: accounts,
  });
});

exports.getLatestAccountsByCategory = asyncHandler(async (req, res, next) => {
  const accounts = await Account.find({ category: req.params.catId })
    .populate({
      path: "category",
      select: "name",
    })
    .sort("-createdAt")
    .limit(8);

  res.status(200).json({
    success: true,
    data: accounts,
  });
});

exports.getCategoryAccounts = asyncHandler(async (req, res, next) => {
  const accounts = await Account.find({
    category: req.params.catId,
    ...req.query,
  });

  res.status(200).json({
    success: true,
    count: accounts.length,
    data: accounts,
  });
});

exports.getAccount = asyncHandler(async (req, res, next) => {
  const book = await Account.findById(req.params.id).populate("category");

  if (!book) {
    throw new MyError(
      "There is no account with this " + req.params.id + " ID",
      200
    );
  }

  res.status(200).json({
    success: true,
    data: book,
  });
});

exports.createAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.create(req.body);

  res.status(200).json({
    success: true,
    data: account,
  });
});

exports.updateAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.findById(req.params.id).populate("category");

  if (!account) {
    throw new MyError(
      "There is no account with this " + req.params.id + " ID",
      200
    );
  }

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

  if (!account) {
    throw new MyError(
      "There is no account with this " + req.params.id + " ID",
      200
    );
  }

  account.remove();

  res.status(200).json({
    success: true,
    data: account,
  });
});
