const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the title of the item"],
    trim: true,
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
  category: {
    unique: false,
    type: mongoose.Schema.ObjectId,
    ref: "categories",
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Account = mongoose.model("account", accountSchema);

module.exports = Account;