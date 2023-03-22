const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "write your name"],
    },
    lastName: {
      type: String,
      required: [true, "write your name"],
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
      enum: ["user", "admin"],
      default: "user",
    },
    password: {
      type: String,
      min: [8, "minimum 8 letter"],
      required: [true, "write your password"],
      select: false,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: [true, "write your gender"],
    },
    profileImage: {
      type: String,
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

userSchema.virtual("userPost", {
  ref: "posts",
  localField: "_id",
  foreignField: "owner",
  justOne: false,
});

userSchema.pre("remove", async function (next) {
  await this.model("posts").deleteMany({ owner: this._id });
  await this.model("comments").deleteMany({ writerId: this._id });
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

femaleProfilePicture = [
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677057469/Blog/06c49b59-2d4e-4305-a510-aae02fa92e0c_bcc3wz.png",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677058132/Blog/dcsohgg-6068e5ed-b130-4e90-9d0e-2818ffef14bb.jpg_h7qutu.jpg",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677058138/Blog/random_profile_picture_by_skybonthebunny_d9mot04-fullview.jpg_fjcqts.jpg",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677058177/Blog/e72wyjmuzkgq_jh7w9p.jpg",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677058206/Blog/054b6826c3565c7ceacc06559ac948cbcefc0ac0_cmtj6j.png",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677058210/Blog/d3f82ab525e2216c7ab238c263352ce7_ihtu1m.jpg",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677058226/Blog/random_profile_picture_by_mysticalbluenova_dck1qv9-pre.png_rtwjta.png",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677058231/Blog/bliss__xbox_profile_picture_by_easterblanket_dbtynep-fullview.jpg_k9vj4x.jpg",
];

maleProfilePicture = [
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677057383/Blog/favicon_cfjsme.png",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677058145/Blog/13e07bd455dcf46_dr3ctt.png",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677058581/Blog/f154020acae62376ac3a4ec0745d2c8e_cuyecd.jpg",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677058591/Blog/OFATsLp8_400x400_oejiev.jpg",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677058622/Blog/aeMA8eW_700b_cr13xy.jpg",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677058636/Blog/main-qimg-89380dcfb5e239d42d8ee3475bedcd36-lq_cfs9ze.jpg",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677058646/Blog/3D-AI-Anime-Boy-Avatar_funqsc.jpg",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677058656/Blog/dxosebl55fcq_cav0zm.jpg",
];

userSchema.methods.profileImageGenerator = async function () {
  if (!this.profileImage) {
    if (this.gender === "male") {
      randomPicture =
        maleProfilePicture[
          Math.floor(Math.random() * maleProfilePicture.length)
        ];
      this.profileImage = randomPicture;
    } else if (this.gender === "female") {
      randomPicture =
        femaleProfilePicture[
          Math.floor(Math.random() * femaleProfilePicture.length)
        ];
      this.profileImage = randomPicture;
    }
  }

  return this.profileImage;
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
