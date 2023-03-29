const mongoose = require("mongoose");
const { slugify } = require("transliteration");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "категорын нэрийг оруулж өгнө үү "],
      unique: true,
      trim: true,
      maxLength: [
        40,
        "The category name must have a maximum length of 40 characters",
      ],
    },
    slugify: String,
    photo: {
      type: String,
      default: "no-photo.jpg",
    },
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: true,
    },
    type: {
      type: String,
      enum: ["sandBox", "shooters", "MOBA", "sports", "puzzle", "AA"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

CategorySchema.virtual("accounts", {
  ref: "accounts",
  localField: "_id",
  foreignField: "category",
  justOne: false,
});

CategorySchema.pre("remove", async function (next) {
  await this.model("account").deleteMany({ category: this._id });
  next();
});

CategorySchema.pre("save", function (next) {
  this.slugify = slugify(this.name);
  next();
});

const Category = mongoose.model("categories", CategorySchema);

module.exports = Category;
