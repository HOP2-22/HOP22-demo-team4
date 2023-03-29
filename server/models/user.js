const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "write your email address"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "your email is not email address",
      ],
    },
    role: {
      type: String,
      enum: ["user", "operator", "admin"],
      default: "user",
    },
    password: {
      type: String,
      min: [8, "minimum 8 letter"],
      required: [true, "write your password"],
      select: false,
    },
    googleId: {
      type: String,
      default: "Not google account",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

userSchema.pre("remove", async function (next) {
  await this.model("accounts").deleteMany({ owner: this._id });
  await this.model("categories").deleteMany({ owner: this._id });
  next();
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.getJWT = function () {
  const token = jwt.sign(
    { id: this._id, role: this.role },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRESIN,
    }
  );

  return token;
};

userSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generatePasswordChangeToken = function () {
  const resetToken = crypto.randomBytes(10).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 5 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("users", userSchema);

module.exports = User;
