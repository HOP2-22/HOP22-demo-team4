const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the title of the item"],
    trim: true,
    minLength: [
      10,
      "The length of the item title must be at most 10 characters",
    ],
    maxLength: [
      250,
      "The length of the item title must be at most 250 characters",
    ],
  },

  mainImage: {
    type: String,
    required: [true, "give a main image"],
  },

  images: {
    type: [String],
  },

  price: {
    type: Number,
    required: [true, "give a price of item"],
  },

  descriptions: {
    type: [
      {
        title: {
          type: String,
          required: [true, "Write title of descriptions"],
        },
        desc: {
          type: String,
          required: [true, "Write description of descriptions"],
        },
      },
    ],
  },

  sold: {
    type: Boolean,
    default: false,
  },

  reported: {
    type: Boolean,
    default: false,
  },

  permission: {
    type: Boolean,
    default: false,
  },

  category: {
    unique: false,
    type: mongoose.Schema.ObjectId,
    ref: "categories",
  },

  owner: {
    unique: false,
    type: mongoose.Schema.ObjectId,
    ref: "users",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Account = mongoose.model("accounts", accountSchema);

module.exports = Account;
