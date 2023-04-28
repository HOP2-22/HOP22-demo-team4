const Category = require("../models/category");

const MyError = require("../utils/myError");
const asyncHandler = require("../middleWare/asyncHandler");
const colors = require("colors");
const paginate = require("../utils/paginate");

exports.getCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find(req.query).populate("accounts");

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

  const { sort, select } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = 10;

  [("page", "select", "sort")].map((el) => delete req.query[el]);

  const total = await Account.find({
    category: id,
    permission: true,
    ...req.query,
  });

  // if (total.length === 0) {
  //   return res.status(200).json({
  //     success: false,
  //     message: "There are no accounts",
  //   });
  // }

  // let min = 100000000000;
  // let max = 0;

  // total.map((item) => {
  //   if (max < item.price) max = item.price;
  // });

  // total.map((item) => {
  //   if (min > item.price) min = item.price;
  // });

  // let pagination = await filteredPaginate(total.length, page, limit);

  // const accounts = await Account.find(
  //   {
  //     category: id,
  //     permission: true,
  //     ...req.query,
  //   },
  //   select
  // )
  //   .populate("category owner")
  //   .sort(sort)
  //   .skip(pagination.start - 1)
  //   .limit(pagination.limit);

  // if (accounts.length === 0) {
  //   return res.status(200).json({
  //     success: false,
  //     message: "There are no accounts",
  //   });
  // }

  // const step = (max - min) / 20;

  // res.status(200).json({
  //   success: true,
  //   pagination,
  //   data: accounts,
  //   min,
  //   max,
  //   step,
  // });

  res.status(200).json({
    success: true,
    data: category,
  });
});

exports.getCategoryByType = asyncHandler(async (req, res, next) => {
  const { type } = req.body;

  let categories;

  if (type) {
    categories = await Category.find({ type: type });
  } else {
    categories = await Category.find({});
  }

  if (!categories)
    throw new MyError("There is no category with this " + type + " type", 200);

  res.status(200).json({
    success: true,
    data: categories,
  });
});
