const express = require("express");

const {
  getUsers,
  checkUser,
  updateUser,
  getUser,
  deleteUser,
} = require("../controller/user");

const {
  register,
  login,
  forgotPassword,
  updatePass,
} = require("../controller/user-auth");

const router = express.Router();

router.route("/").get(getUsers).post(checkUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.post("/signup", register);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.post("/updatePassword", updatePass);

module.exports = router;
