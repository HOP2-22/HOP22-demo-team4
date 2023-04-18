const express = require("express");

const {
  getUsers,
  deleteUser,
  getUser,
  updateUser,
  register,
  login,
  updatePass,
  forgotPassword,
  checkUser,
} = require("../controller/user");

const router = express.Router();

router.route("/").get(getUsers).post(checkUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.post("/auth/signup", register);
router.post("/auth/login", login);
router.post("/auth/forgotPassword", forgotPassword);
router.post("/auth/updatePassword", updatePass);

module.exports = router;
