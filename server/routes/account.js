const express = require("express");

const { protect, authorize } = require("../middleWare/protect");

const {
  getCategoryAccounts,
  getUserAccounts,
  getLatestAccountsByCategory,
  getAccount,
} = require("../controller/account-get");

const {
  createAccount,
  updateAccount,
  deleteAccount,
} = require("../controller/account-controller");

const {
  purchaseAccount,
  addFavorite,
  removeFavorite,
  clearFavorite,
} = require("../controller/account-favorite");

const router = express.Router();

router.route("/").get(getCategoryAccounts).post(createAccount);

router.post("/purchase", purchaseAccount);

router.route("/adfavorite").post(addFavorite);
router.route("/refavorite").post(removeFavorite);
router.route("/clfavorite").post(clearFavorite);

router.get("/user/:ownerId", getUserAccounts);

router.get("/latest/:catId", getLatestAccountsByCategory);

router.route("/:id").get(getAccount).put(updateAccount).delete(deleteAccount);

module.exports = router;
