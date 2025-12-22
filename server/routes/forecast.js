const express = require("express");
const router = express.Router();
const liveData = require("../data/liveData.json");
const forecastEngine = require("../logic/forecastEngine");

router.get("/", (req, res) => {
  const forecast = forecastEngine(liveData);
  res.json(forecast);
});

module.exports = router;