const express = require("express");
const router = express.Router();
const liveData = require("../data/liveData.json");

router.get("/", (req, res) => {
  res.json({
    currentCases: liveData.currentBacklog,
    capacity: liveData.processingCapacity,
    slaRisk: liveData.currentBacklog > 400,
    alert: "85% chance of SLA breach in 4 hours"
  });
});

module.exports = router;