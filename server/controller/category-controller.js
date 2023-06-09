const Category = require("../models/category");
const User = require("../models/user");

const MyError = require("../utils/myError");
const asyncHandler = require("../middleWare/asyncHandler");

exports.addType = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { type } = req.body;

  const category = await Category.findById(id);

  if (!category)
    throw new MyError("There is no category with this " + type + " type", 200);

  category.type = [...category.type, type];

  await category.save();

  res.status(200).json({
    success: true,
    data: category,
  });
});

exports.createCategory = asyncHandler(async (req, res, next) => {
  const field = await Category.findOne({ name: req.body.name });

  if (field)
    return res.status(404).json({
      success: false,
      message: "There are category like that name , name is unique",
    });

  const category = await Category.create(req.body);

  res.status(200).json({
    success: true,
    data: category,
  });
});

exports.updateCategory = asyncHandler(async (req, res, next) => {
  const adminId = req.body.adminId;
  delete req.body.adminId;

  const category = await Category.findById(req.params.id);

  if (!category)
    throw new MyError(
      "There is no category with this " + req.params.id + " ID",
      200
    );

  for (let item in req.body) {
    category[item] = req.body[item];
    console.log(category[item]);
  }

  if (adminId) {
    const user = await User.findById(adminId);

    if (!user) throw new MyError("There are no admin like that id", 404);

    if (user.role === "admin") {
      category.updatedUser === adminId;
    }
  }

  await category.save();

  res.status(200).json({
    success: true,
    data: category,
  });
});

exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category)
    throw new MyError(
      "There is no category with this " + req.params.id + " ID",
      200
    );

  category.remove();

  res.status(200).json({
    success: true,
    data: category,
  });
});
