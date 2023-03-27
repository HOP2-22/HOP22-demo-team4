const jwt = require("jsonwebtoken");
const asyncHandler = require("./asyncHandler");
const MyError = require("../utils/myError");
const User = require("../models/user");

exports.protect = asyncHandler(async (req, res, next) => {
  if (!req.headers.authorization) {
    throw new MyError("first login please", 200);
  }
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    throw new MyError("token invalid", 200);
  }

  const tokenObj = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  if (!tokenObj) {
    throw new MyError("token invalid", 200);
  }

  req.userId = tokenObj.id;
  req.role = tokenObj.role;

  next();
});

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.role)) {
      throw new MyError(" You are not authorized to perform this action");
    }
    next();
  };
};
