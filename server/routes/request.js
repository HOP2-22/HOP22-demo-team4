const express = require("express");

const { protect, authorize } = require("../middleWare/protect");

const {
  getRequests,
  createRequest,
  deleteRequest,
} = require("../controller/request");

const router = express.Router();

router.route("/").get(getRequests).post(createRequest);

router.delete("/:id", deleteRequest);

module.exports = router;
