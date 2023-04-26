const Account = require("../models/account");
const Category = require("../models/category");

const filteredPaginate = require("../utils/filteredPaginate");
const MyError = require("../utils/myError");

const asyncHandler = require("../middleWare/asyncHandler");

exports.getAccounts = asyncHandler(async (req, res, next) => {
  const accounts = await Account.find(req.query).populate("category");

  res.status(200).json({
    success: true,
    data: accounts,
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
  const { sort, select } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = 10;

  const cat = await Category.findOne({ slugify: req.body.slugify });
  const id = cat._id;

  [("page", "select", "sort")].map((el) => delete req.query[el]);

  const total = await Account.find({
    category: id,
    ...req.query,
  });

  if (total.length === 0) {
    return res.status(200).json({
      success: false,
      message: "There are no accounts",
    });
  }

  let min = 100000000000;
  let max = 0;

  total.map((item) => {
    if (max < item.price) max = item.price;
  });

  total.map((item) => {
    if (min > item.price) min = item.price;
  });

  let pagination = await filteredPaginate(total.length, page, limit);

  const accounts = await Account.find(
    {
      category: id,
      ...req.query,
    },
    select
  )
    .populate("category owner")
    .sort(sort)
    .skip(pagination.start - 1)
    .limit(pagination.limit);

  if (accounts.length === 0) {
    return res.status(200).json({
      success: false,
      message: "There are no accounts",
    });
  }

  const step = (max - min) / 20;

  res.status(200).json({
    success: true,
    pagination,
    data: accounts,
    min,
    max,
    step,
  });
});

exports.getAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.findById(req.params.id)
    .populate("category")
    .populate("owner");

  if (!account)
    throw new MyError(
      "There is no account with this " + req.params.id + " ID",
      200
    );

  res.status(200).json({
    success: true,
    data: account,
  });
});
