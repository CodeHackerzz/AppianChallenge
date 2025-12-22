export default function ForecastChart() {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-xl">
      <h2 className="text-xl font-semibold mb-2">
        SLA Breach Forecast
      </h2>

      <p className="text-sm text-gray-400 mb-6">
        Probability over the next 6 hours
      </p>

      <div className="h-40 rounded-xl bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 opacity-80"></div>

      <p className="mt-6 text-red-400 font-medium">
        ⚠ 85% chance of SLA breach in 4 hours
      </p>
    </div>
  );
}