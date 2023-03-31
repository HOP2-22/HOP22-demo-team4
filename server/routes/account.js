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
} = require("../controller/account");

const router = express.Router();

router.route("/").get(getAccounts).post(createAccount);

router.post("/purchase", purchaseAccount);

router.route("/favorite").post(addFavorite).delete(removeFavorite);

router.get("/user/:ownerId", getUserAccounts);

router.get("/latest/:catId", getLatestAccountsByCategory);

router.route("/:id").get(getAccount).put(updateAccount).delete(deleteAccount);

module.exports = router;
