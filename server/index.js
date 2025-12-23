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


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
