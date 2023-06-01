const Request = require("../models/request");
const asyncHandler = require("../middleWare/asyncHandler");

exports.getRequests = asyncHandler(async (req, res, next) => {
  const requests = await Request.find({});

  res.status(200).json({
    success: true,
    data: requests,
    message: "all requests",
  });
});

exports.createRequest = asyncHandler(async (req, res, next) => {
  await Request.create(req.body);

  res.status(200).json({
    success: true,
    message: "successfully created",
  });
});

exports.deleteRequest = asyncHandler(async (req, res, next) => {
  await Request.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "successfully deleted",
  });
});
