const paginate = require("../utils/paginate");
const asyncHandler = require("../middleWare/asyncHandler");
const MyError = require("../utils/myError");
const User = require("../models/user");
const sendEmail = require("../utils/email");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.register = asyncHandler(async (req, res, next) => {
  const checkEmail = await User.findOne({ email: req.body.email });

  if (checkEmail !== null)
    return res.status(200).json({
      success: false,
      message: `${req.body.email} бүртгэлтэй байна`,
    });

  const user = await User.create(req.body);

  res.status(200).json({
    success: true,
    data: user,
    message: "registered successfully",
  });
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new MyError("write your email or password", 200);

  const user = await User.findOne({ email: email }).select("+password");

  if (!user) throw new MyError("wrong your email or password", 200);

  const isOkey = await user.checkPassword(password);

  if (!isOkey) throw new MyError("wrong your email or password", 200);

  const token = user.getJWT();

  const callBackUser = await User.findOne({ email: email })
    .populate(["purchasedAccounts", "userFavorite", "publishedAccounts"])
    .populate({
      path: "chatrooms",
      populate: "messages",
    });

  res.status(200).json({
    success: true,
    data: { token, user: callBackUser },
  });
});

exports.forgotPassword = asyncHandler(async (req, res, next) => {
  if (!req.body.email)
    throw new MyError(`You must provide an email address`, 200);

  const user = await User.findOne({ email: req.body.email }).exec();

  if (!user)
    throw new MyError(
      `${req.body.email} ийм и-мэйлтэй хэрэглэгч олдсонгүй`,
      200
    );

  const resetToken = user.generatePasswordChangeToken();

  await user.save();

  const link = `http://localhost:3000/auth/${resetToken}`;

  await sendEmail({
    id: req.body.email,
    subject: "SWAPZONE саятын нууц үг солих линк",
    message: `Энэ нь дээр дарж нууц үгээ солино уу.<br><br><a href="${link}">${link}</a>`,
  });

  res.status(200).json({
    success: true,
  });
});

exports.updatePass = asyncHandler(async (req, res, next) => {
  if (!req.body.resetToken || !req.body.password)
    throw new MyError(`You have to write token and password`, 200);

  const encrypt = crypto
    .createHash("sha256")
    .update(req.body.resetToken)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken: encrypt,
    resetPasswordExpired: { $gt: Date.now() },
  });

  if (!user) throw new MyError(`Time is over to change password`, 200);

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  res.status(200).json({
    success: true,
    user: user,
  });
});
