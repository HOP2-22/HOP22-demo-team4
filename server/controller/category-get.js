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
  const category = await Category.findById(req.params.id);

  if (!category)
    throw new MyError(
      "There is no category with this " + req.params.id + " ID",
      200
    );

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
