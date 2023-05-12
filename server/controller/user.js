const User = require("../models/user");

const MyError = require("../utils/myError");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../middleWare/asyncHandler");
const paginate = require("../utils/paginate");

exports.checkUser = asyncHandler(async (req, res, next) => {
  const token = req?.headers?.token;

  if (!token) {
    return res.status(200).json({
      success: false,
      message: "Invalid token",
    });
  }

  const data = await jwt.decode(token, process.env.ACCESS_TOKEN_SECRET);

  const user = await User.findById(data?.id).populate([
    "purchasedAccounts",
    "userFavorite",
    "publishedAccounts",
  ]);

  res.status(200).json({
    success: true,
    data: { user, data },
  });
});

exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find({})
    .populate("publishedAccounts")
    .populate({ path: "chatrooms", populate: "messages" })
    .select("name email chatrooms");

  res.status(200).json({
    success: true,
    data: users,
  });
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id).populate({
    path: "publishedAccounts",
    populate: "category",
  });

  if (!user)
    throw new MyError("THere is no user with" + req.params.id + "this id", 404);

  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user)
    throw new MyError(
      "There is no user with this " + req.params.id + " ID",
      200
    );

  user.remove();

  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const adminId = req.body.adminId;
  delete req.body.adminId;

  const user = await User.findById(req.params.id);

  if (!user)
    throw new MyError(
      "There is no user with this " + req.params.id + " ID",
      200
    );

  for (let item in req.body) {
    user[item] = req.body[item];
  }

  if (adminId) {
    const user = await User.findById(adminId);

    if (user.role === "admin") {
      user.updatedUser === adminId;
    }
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});
