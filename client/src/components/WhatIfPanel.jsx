import { useState } from "react";

export default function WhatIfPanel({ onSimulate }) {
  const [count, setCount] = useState(2);

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
      <h3 className="font-semibold text-lg mb-2">
        What-If Scenario Simulator
      </h3>
      <p className="text-sm text-slate-300 mb-4">
        Reallocate reviewers to test impact on SLA risk.
      </p>

      <input
        type="range"
        min="0"
        max="5"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        className="w-full"
      />

      <div className="flex justify-between text-sm mt-2">
        <span>0</span>
        <span>{count} reviewers</span>
        <span>5</span>
      </div>

      <button
        onClick={() => onSimulate(Number(count))}
        className="mt-6 w-full py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-500 text-black font-semibold hover:scale-[1.02] transition"
      >
        Simulate Impact
      </button>
    </div>
  );
}