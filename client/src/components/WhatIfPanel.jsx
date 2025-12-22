export default function WhatIfPanel() {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-xl">
      <h2 className="text-xl font-semibold mb-2">
        What-If Simulation
      </h2>

      <p className="text-sm text-gray-400 mb-6">
        Adjust reviewer allocation to reduce SLA risk
      </p>

      <input
        type="range"
        min="0"
        max="10"
        className="w-full accent-indigo-500"
      />

      <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-400/20 text-emerald-400">
        SLA risk reduces to <strong>22%</strong>
      </div>
    </div>
  );
}