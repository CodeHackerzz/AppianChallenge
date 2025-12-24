import { useEffect, useState } from "react";
import {
  fetchDashboard,
  fetchForecast,
  runWhatIf
} from "../services/api";

import ForecastChart from "../components/ForecastChart";
import WhatIfPanel from "../components/WhatIfPanel";
import Recommendation from "../components/Recommendation";
import SmartAlert from "../components/SmartAlert";
import DigitalTwin from "../components/DigitalTwin";

// ⏱️ Time-to-Failure logic
function calculateTimeToFailure(forecast) {
  const critical = forecast.find((f) => f.slaRisk >= 80);
  return critical ? `${critical.hour} hrs` : "Safe";
}

export default function Dashboard() {
  const [dashboard, setDashboard] = useState({});
  const [forecast, setForecast] = useState([]);
  const [baselineForecast, setBaselineForecast] = useState([]);

  useEffect(() => {
    fetchDashboard().then(setDashboard);

    fetchForecast().then((data) => {
      setForecast(data);
      setBaselineForecast(data); // store BEFORE state
    });
  }, []);

  // 🔥 What-If Simulation handler
  const handleSimulation = async (reviewersMoved) => {
    const simulatedData = await runWhatIf(reviewersMoved);
    setForecast(simulatedData); // updates graph + metrics
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white p-8">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-1">
          Predictive Operations Center
        </h1>
        <p className="text-slate-400">
          Proactive SLA risk forecasting & decision intelligence
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white/10 p-6 rounded-xl">
          <p className="text-sm text-slate-400">Current Backlog</p>
          <p className="text-3xl font-bold">
            {dashboard.currentCases}
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl border border-rose-500/40">
          <p className="text-sm text-slate-400">SLA Status</p>
          <p className="text-2xl font-bold text-rose-400">
            {dashboard.slaAtRisk ? "At Risk" : "Stable"}
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl">
          <p className="text-sm text-slate-400">Predicted Breach</p>
          <p className="text-lg font-semibold text-amber-400">
            85% in 4 hrs
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl border border-amber-400/40">
          <p className="text-sm text-slate-400">Time to Failure</p>
          <p className="text-3xl font-bold text-amber-400">
            {calculateTimeToFailure(forecast)}
          </p>
        </div>
      </div>

      {/* GRAPH + WHAT-IF */}
      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        <ForecastChart data={forecast} />

        <WhatIfPanel onSimulate={handleSimulation} />
      </div>

      {/* BEFORE vs AFTER */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/10 p-5 rounded-xl border border-rose-500/40">
          <h4 className="font-semibold text-rose-300 mb-2">
            Before Action
          </h4>
          <p>SLA Risk: {baselineForecast.at(-1)?.slaRisk}%</p>
          <p>Backlog: {baselineForecast.at(-1)?.backlog}</p>
        </div>

        <div className="bg-white/10 p-5 rounded-xl border border-emerald-500/40">
          <h4 className="font-semibold text-emerald-300 mb-2">
            After Action
          </h4>
          <p>SLA Risk: {forecast.at(-1)?.slaRisk}%</p>
          <p>Backlog: {forecast.at(-1)?.backlog}</p>
        </div>
      </div>

      {/* SMART ALERT */}
      <SmartAlert
        before={baselineForecast.at(-1)}
        after={forecast.at(-1)}
      />

      {/* RECOMMENDATION */}
      <div className="my-8">
        <Recommendation before={80} after={15} />
      </div>

      {/* DIGITAL TWIN */}
      <DigitalTwin />

    </div>
  );
}
