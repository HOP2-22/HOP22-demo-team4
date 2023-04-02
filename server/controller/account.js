const Account = require("../models/account");
const Category = require("../models/category");

const paginate = require("../utils/paginate");
const MyError = require("../utils/myError");

const asyncHandler = require("../middleWare/asyncHandler");
const User = require("../models/user");

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
    slugify: req.body.slugify,
    ...req.query,
  });

  res.status(200).json({
    success: true,
    count: accounts.length,
    data: accounts,
  });
});

exports.getAccount = asyncHandler(async (req, res, next) => {
  const book = await Account.findById(req.params.id)
    .populate("category")
    .populate("owner");

  if (!book)
    throw new MyError(
      "There is no account with this " + req.params.id + " ID",
      200
    );

  res.status(200).json({
    success: true,
    data: book,
  });
});

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
  const user = await User.findById(req.body.userId);

  if (!user)
    throw new MyError(
      "There is no user with this " + req.body.userId + " ID",
      200
    );

  user.userFavorite = user.userFavorite.filter((item) => {
    `new ObjectId(${item})` !== req.body.accountId;
  });

  user.save();

  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.purchaseAccount = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.body.userId);

  if (!user)
    throw new MyError(
      "There is no user with this " + req.body.userId + " ID",
      200
    );

  const account = await Account.findById(req.body.accountId);

  if (!account)
    throw new MyError(
      "There is no account with this " + req.body.accountId + " ID",
      200
    );

  if (account.sold === true)
    throw new MyError("This account already purchased", 200);

  user.purchasedccount.push(account);
  user.save();

  account.sold = true;
  account.save();

  res.status(200).json({
    success: true,
    data: { purchasedAccount: account, user },
  });
});

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
    .populate("category")
    .populate("owner")
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
