const jwt = require("jsonwebtoken");
const asyncHandler = require("./asyncHandler");
const MyError = require("../utils/myError");
const User = require("../models/users");

exports.protect = asyncHandler(async (req, res, next) => {
  if (!req.headers.authorization) {
    throw new MyError("энийг үйлдэлийг хийхийн тулд та логин хийнэ үү", 401);
  }
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    throw new MyError("токин байхгүй байна", 400);
  }

  const tokenObj = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  if (!tokenObj) {
    throw new MyError("токин байхгүй байна", 400);
  }

  req.userId = tokenObj.id;
  req.role = tokenObj.role;

  next();
});

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.role)) {
      throw new MyError(
        "таны эрх [" + req.role + "] энэ үйлдэлийг хийхэд хүрэхгүй байна"
      );
    }
    next();
  };
};
