const Category = require("../models/category");
const MyError = require("../utils/myError");
const asyncHandler = require("../middleWare/asyncHandler");
const colors = require("colors");
const paginate = require("../utils/paginate");

exports.getCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find(req.query);

  res.status(200).json({
    success: true,
    data: categories,
  });
});

exports.getCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    throw new MyError(
      "There is no category with this " + req.params.id + " ID",
      200
    );
  }

  res.status(200).json({
    success: true,
    data: category,
  });
});

exports.createCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.create(req.body);

  res.status(200).json({
    success: true,
    data: category,
  });
});

exports.updateCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!category) {
    throw new MyError(
      "There is no category with this " + req.params.id + " ID",
      200
    );
  }

  res.status(200).json({
    success: true,
    data: category,
  });
});

exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    throw new MyError(
      "There is no category with this " + req.params.id + " ID",
      200
    );
  }

  category.remove();

  res.status(200).json({
    success: true,
    data: category,
  });
});
