const express = require("express");

const { protect, authorize } = require("../middleWare/protect");

const router = express.Router();

const {
  getCategories,
  getCategory,
  getCategoryByType,
} = require("../controller/category-get");

const {
  createCategory,
  updateCategory,
  deleteCategory,
  addType,
} = require("../controller/category-controller");

router.route("/").get(getCategories).post(createCategory);
router.post("/type", getCategoryByType);
router.post("/type/:id", addType);

router.post("/slugify", getCategory);

router.route("/:id").put(updateCategory).delete(deleteCategory);

module.exports = router;
