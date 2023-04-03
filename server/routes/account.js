const express = require("express");

const { protect, authorize } = require("../middleWare/protect");

const {
  getAccounts,
  getAccount,
  getUserAccounts,
  createAccount,
  deleteAccount,
  updateAccount,
  getLatestAccountsByCategory,
  purchaseAccount,
  addFavorite,
  removeFavorite,
  clearFavorite,
} = require("../controller/account");

const router = express.Router();

router.route("/").get(getAccounts).post(createAccount);

router.post("/purchase", purchaseAccount);

router.route("/adfavorite").post(addFavorite);
router.route("/refavorite").post(removeFavorite);
router.route("/clfavorite").post(clearFavorite);

router.get("/user/:ownerId", getUserAccounts);

router.get("/latest/:catId", getLatestAccountsByCategory);

router.route("/:id").get(getAccount).put(updateAccount).delete(deleteAccount);

module.exports = router;
