const express = require("express");
const router = express.Router();
const liveData = require("../data/liveData.json");
const forecastEngine = require("../logic/forecastEngine");

router.post("/", (req, res) => {
  const { moveReviewers } = req.body;

  const simulatedData = {
    ...liveData,
    processingCapacity: liveData.processingCapacity + moveReviewers * 15
  };

  const result = forecastEngine(simulatedData);
  res.json(result);
});

module.exports = router;