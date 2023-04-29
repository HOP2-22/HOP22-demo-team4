const express = require("express");

const { protect, authorize } = require("../middleWare/protect");

const { getAccount, getAccounts } = require("../controller/account-get");

const {
  createAccount,
  updateAccount,
  deleteAccount,
} = require("../controller/account-controller");

const {
  addFavorite,
  removeFavorite,
  clearFavorite,
} = require("../controller/user-favorite");

const router = express.Router();

router.route("/").get(getAccounts).post(createAccount);

router.route("/add").post(addFavorite);
router.route("/remove").post(removeFavorite);
router.route("/clear").post(clearFavorite);

router.route("/:id").get(getAccount).put(updateAccount).delete(deleteAccount);

module.exports = router;
