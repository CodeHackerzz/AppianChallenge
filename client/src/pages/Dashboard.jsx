import KPI_Cards from "../components/KPI_Cards";
import ForecastChart from "../components/ForecastChart";
import WhatIfPanel from "../components/WhatIfPanel";
import RecommendationBox from "../components/RecommendationBox";
import DigitalTwin from "../components/DigitalTwin";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Appian Operations Center
          </h1>
          <span className="text-sm text-gray-400">
            Predictive Process Simulation
          </span>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        <KPI_Cards />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <ForecastChart />
          <WhatIfPanel />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <RecommendationBox />
          <DigitalTwin />
        </div>
      </main>
    </div>
  );
}