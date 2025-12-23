import { useEffect, useState } from "react";
import { fetchDashboard, fetchForecast, runWhatIf } from "../services/api";
import ForecastChart from "../components/ForecastChart";
import Recommendation from "../components/Recommendation";
import DigitalTwin from "../components/DigitalTwin";
import SmartAlert from "../components/SmartAlert";

function timeToFailure(forecast) {
  const critical = forecast.find(f => f.slaRisk >= 80);
  return critical ? `${critical.hour} hrs` : "Safe";
}

export default function Dashboard() {
  const [dashboard, setDashboard] = useState({});
  const [forecast, setForecast] = useState([]);
  const [beforeForecast, setBeforeForecast] = useState([]);
  const [workers, setWorkers] = useState(2);

  useEffect(() => {
    fetchDashboard().then(setDashboard);
    fetchForecast().then(data => {
      setForecast(data);
      setBeforeForecast(data);
    });
  }, []);

  const simulate = async () => {
    const data = await runWhatIf(workers);
    setForecast(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white p-8">

      <h1 className="text-4xl font-bold mb-2">
        Predictive Operations Center
      </h1>
      <p className="text-slate-400 mb-10">
        Decision intelligence for SLA-critical operations
      </p>

      {/* KPI SECTION */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white/10 p-6 rounded-xl">
          <p className="text-sm">Current Backlog</p>
          <p className="text-3xl font-bold">{dashboard.currentCases}</p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl border border-rose-500/40">
          <p className="text-sm">SLA Status</p>
          <p className="text-3xl font-bold text-rose-400">
            {dashboard.slaAtRisk ? "AT RISK" : "STABLE"}
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl">
          <p className="text-sm">Predicted Breach</p>
          <p className="text-xl font-semibold text-amber-400">
            85% in 4 hrs
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl border border-amber-400/40">
          <p className="text-sm">Time to Failure</p>
          <p className="text-3xl font-bold text-amber-400">
            {timeToFailure(forecast)}
          </p>
        </div>
      </div>

      {/* FORECAST + WHAT IF */}
      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        <ForecastChart data={forecast} />

        <div className="bg-white/10 p-6 rounded-xl">
          <h3 className="font-semibold mb-2">What-If Simulation</h3>
          <input
            type="range"
            min="0"
            max="5"
            value={workers}
            onChange={(e) => setWorkers(e.target.value)}
            className="w-full"
          />
          <p className="mt-2">{workers} reviewers reallocated</p>

          <button
            onClick={simulate}
            className="mt-4 w-full py-2 rounded bg-gradient-to-r from-emerald-400 to-cyan-500 text-black font-semibold"
          >
            Run Simulation
          </button>
        </div>
      </div>

      {/* BEFORE vs AFTER */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/10 p-5 rounded-xl border border-rose-500/40">
          <h4 className="text-rose-300 font-semibold mb-2">Before</h4>
          <p>SLA Risk: {beforeForecast.at(-1)?.slaRisk}%</p>
          <p>Backlog: {beforeForecast.at(-1)?.backlog}</p>
        </div>

        <div className="bg-white/10 p-5 rounded-xl border border-emerald-500/40">
          <h4 className="text-emerald-300 font-semibold mb-2">After</h4>
          <p>SLA Risk: {forecast.at(-1)?.slaRisk}%</p>
          <p>Backlog: {forecast.at(-1)?.backlog}</p>
        </div>
      </div>

      <SmartAlert
        before={beforeForecast.at(-1)}
        after={forecast.at(-1)}
      />

      <Recommendation before={80} after={15} />

      <div className="mt-8">
        <DigitalTwin />
      </div>
    </div>
  );
}