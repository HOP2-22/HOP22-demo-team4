const express = require("express");

const { protect, authorize } = require("../middleWare/protect");

const router = express.Router();

const { getCategoryAccounts } = require("../controller/account-get");

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

router.route("/accounts").post(getCategoryAccounts);

router.route("/").get(getCategories).post(createCategory);
router.route("/type").post(getCategoryByType);
router.route("/type/:id").post(addType);

router
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
