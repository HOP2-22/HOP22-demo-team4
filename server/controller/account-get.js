const Account = require("../models/account");

const paginate = require("../utils/paginate");
const MyError = require("../utils/myError");

const asyncHandler = require("../middleWare/asyncHandler");

exports.getAccounts = asyncHandler(async (req, res, next) => {
  const { sort, select } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = req.query.limit || 1000000;

  [("page", "select", "sort", "limit")].map((el) => delete req.query[el]);

  const pagination = await paginate(Account, page, limit);

  const accounts = await Account.find(
    {
      ...req.query,
      // permission: false,
    },
    select
  )
    .populate({
      path: "category",
      select: "name",
    })
    .sort(sort)
    .limit(limit)
    .skip(pagination.start - 1);

  res.status(200).json({
    success: true,
    pagination: pagination,
    data: accounts,
  });
});

exports.getAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.findById(req.params.id).populate([
    "category",
    "owner",
  ]);

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
