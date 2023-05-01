const Category = require("../models/category");

const MyError = require("../utils/myError");
const asyncHandler = require("../middleWare/asyncHandler");
const colors = require("colors");
const paginate = require("../utils/paginate");
const filteredPaginate = require("../utils/filteredPaginate");
const Account = require("../models/account");

exports.getCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find(req.query);

  res.status(200).json({
    success: true,
    data: categories,
  });
});

exports.getCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findOne({
    slugify: req.body.slugify,
  }).populate({ path: "accounts" });

  if (!category)
    throw new MyError(
      "There is no category with this " + req.params.id + " ID",
      200
    );

  let length = 0;

  category.accounts.map((item) => {
    if (
      item.price > req.query.price["$gte"] &&
      item.price < req.query.price["$lte"]
    ) {
      length++;
    }
  });

  const { sort, select } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = 10;

  [("page", "select", "sort")].map((el) => delete req.query[el]);

  let min = 100000000000;
  let max = 0;

  for (let i = 0; i < category.accounts.length; i++) {
    if (max < category.accounts[i].price) max = category.accounts[i].price;
    if (min > category.accounts[i].price) min = category.accounts[i].price;
  }

  let pagination = await filteredPaginate(length, page, limit);

  const accounts = await Account.find(
    {
      category: category._id,
      // permission: false,
      ...req.query,
    },
    select
  )
    .populate("owner")
    .sort(sort)
    .skip(pagination.start - 1)
    .limit(pagination.limit);

  const step = (max - min) / 20;

  category.accounts = accounts;

  const categories = await Category.find({}, "name slugify");

  res.status(200).json({
    success: true,
    paginate: pagination,
    data: category,
    categories,
    min,
    max,
    step,
  });
});

exports.getCategoryByType = asyncHandler(async (req, res, next) => {
  const { type } = req.body;

  const { sort, select } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 0;

  [("page", "select", "sort")].map((el) => delete req.query[el]);

  let pagination = paginate(Category, page, 0);

  let categories;

  if (type) {
    categories = await Category.find({ type: type }, select)
      .sort(sort)
      .limit(limit)
      .skip(pagination.start - 1);
  } else {
    categories = await Category.find({}, select)
      .sort(sort)
      .limit(limit)
      .skip(pagination.start - 1);
  }

  if (!categories)
    throw new MyError("There is no category with this " + type + " type", 200);

  res.status(200).json({
    success: true,
    data: categories,
  });
});
