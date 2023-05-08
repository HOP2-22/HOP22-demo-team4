const express = require("express");

const { protect, authorize } = require("../middleWare/protect");

const router = express.Router();

const {
  getCategories,
  getCategory,
  getCategoryByType,
  getCategoryById,
} = require("../controller/category-get");

const {
  createCategory,
  updateCategory,
  deleteCategory,
  addType,
} = require("../controller/category-controller");

router.route("/").get(getCategories).post(createCategory);
router.route("/:id").get(getCategoryById);
router.post("/type", getCategoryByType);
router.post("/type/:id", addType);

router.post("/slugify", getCategory);

router.route("/:id").put(updateCategory).delete(deleteCategory).get(getCategoryById);

module.exports = router;
