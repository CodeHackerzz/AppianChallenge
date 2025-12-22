const express = require("express");
const cors = require("cors");

const dashboardRoute = require("./routes/dashboard");
const forecastRoute = require("./routes/forecast");
const whatIfRoute = require("./routes/whatif");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/dashboard", dashboardRoute);
app.use("/forecast", forecastRoute);
app.use("/whatif", whatIfRoute);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});