const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login/failed" }),
  function (req, res) {
    res.redirect(process.env.REDIRECT_LOCAL);
  }
);

router.get("/login/failed", (req, res) => {
  res.status(200).json({ success: false, message: "user not found" });
});

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

router.get("/login/success", (req, res) => {
  console.log(req.user);
  if (req.user) {
    res.status(200).json({ success: true, user: req.user });
  } else {
    res.status(200).json({ success: false, message: "user not found" });
  }
});

module.exports = router;
