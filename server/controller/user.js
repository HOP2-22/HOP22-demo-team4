const paginate = require("../utils/paginate");
const asyncHandler = require("../middleWare/asyncHandler");
const MyError = require("../utils/myError");
const User = require("../models/user");
const sendEmail = require("../utils/email");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.checkUser = asyncHandler(async (req, res, next) => {
  const token = req?.headers?.token;

  if (!token) {
    return res.status(404).json({
      success: false,
      message: "Invalid token",
    });
  }

  const data = await jwt.decode(token, process.env.ACCESS_TOKEN_SECRET);

  const user = await User.findById(data?.id);

  res.status(200).json({
    success: true,
    data: { user, data },
    message: "successfully check token",
  });
});

exports.getUsers = asyncHandler(async (req, res, next) => {
  const { limit, sort } = req.query;
  delete req.query.limit;

  const users = await User.find({})
    .populate("userPost")
    .limit(limit)
    .sort(sort);

  res.status(200).json({
    success: true,
    data: users,
    message: "Get all users information",
  });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new MyError(`ID алдаатай байна`, 404);
  }

  user.remove();

  res.status(200).json({
    success: true,
    data: user,
    message: "User deleted",
  });
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const { select } = req.query;
  ["select"].map((el) => delete req.query[el]);

  const user = await User.findById(req.params.id, select).populate("userPost");

  res.status(200).json({
    success: true,
    data: user,
    message: "user data",
  });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    throw new MyError(`wrong ID`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: user,
    message: "user updated",
  });
});

exports.verifyUser = asyncHandler(async (req, res, next) => {
  if (!req.body.email) {
    throw new MyError(`Write your email address`, 404);
  }

  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let stringId = "";
  for (let i = 0; i < 5; i++) {
    stringId += characters.charAt(Math.floor(Math.random() * 62));
  }

  await sendEmail({
    id: req.body.email,
    subject: "register",
    message: `verify code "${stringId}"`,
  });

  res.status(200).json({
    success: true,
    data: {
      verifyCode: stringId,
    },
    message: "verify code sent",
  });
});

exports.register = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  const token = user.getJWT();
  user.profileImageGenerator();

  await user.save();

  res.status(200).json({
    success: true,
    data: { token, user },
    message: "registered successfully",
  });
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new MyError("write your email or password", 400);
  }

  const user = await User.findOne({ email: email }).select("+password");

  if (!user) {
    throw new MyError("wrong your email or password", 400);
  }

  const isOkey = await user.checkPassword(password);

  if (!isOkey) {
    throw new MyError("wrong your email or password", 400);
  }

  const token = user.getJWT();

  user.password = "";

  res.status(200).json({
    success: true,
    data: { token, user },
    message: "user loged",
  });
});

exports.forgotPassword = asyncHandler(async (req, res, next) => {
  if (!req.body.email) {
    throw new MyError(`You must provide an email address`, 404);
  }

  const user = await User.findOne({ email: req.body.email }).exec();

  if (!user) {
    throw new MyError(`Any user found like that ${req.body.email} email`, 404);
  }

  const resetToken = user.generatePasswordChangeToken();

  await user.save();

  const link = `http://localhost:3000/register/changePassword/${resetToken}`;

  await sendEmail({
    id: req.body.email,
    subject: "Blog website Change Password",
    message: `click on it to change your password.<br><br><a href="${link}">${link}</a>`,
  });

  res.status(200).json({
    success: true,
    message: { message: "sent link to your email" },
  });
});

exports.updatePass = asyncHandler(async (req, res, next) => {
  if (!req.body.resetToken || !req.body.password) {
    throw new MyError(`You have to write token and password`, 404);
  }

  const encrypt = crypto
    .createHash("sha256")
    .update(req.body.resetToken)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken: encrypt,
    resetPasswordExpired: { $gt: Date.now() },
  });

  if (!user) {
    throw new MyError(`Time is over to change password`, 404);
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  res.status(200).json({
    isDone: true,
    user: user,
    message: "Password changed successfully",
  });
});
