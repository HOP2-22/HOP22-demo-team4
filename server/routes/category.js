const express = require("express");

// const { protect, authorize } = require("../middleWare/protect");

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryByType,
} = require("../controller/category");

const { getCategoryAccounts } = require("../controller/account");

const router = express.Router();

router.route("/accounts").post(getCategoryAccounts);

router.route("/").get(getCategories).post(createCategory);
router.route("/type").post(getCategoryByType);

router
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
