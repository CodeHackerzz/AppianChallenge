import { useState } from "react";

export default function WhatIfPanel({ onSimulate }) {
  const [reviewers, setReviewers] = useState(2);
  const [previewRisk, setPreviewRisk] = useState(65);

  const handleChange = (value) => {
    setReviewers(value);
    // simulate preview impact (UI-only intelligence)
    setPreviewRisk(85 - value * 10);
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
      <h3 className="font-semibold text-lg mb-1">
        What-If Decision Simulator
      </h3>
      <p className="text-xs text-slate-400 mb-6">
        Test workforce changes before applying them to live operations
      </p>

      {/* DECISION CARD */}
      <div className="border border-slate-600 rounded-lg p-4 mb-5">
        <p className="text-sm text-slate-300 mb-2">
          Reallocate Reviewers
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-3xl font-bold text-cyan-400">
            {reviewers}
          </span>
          <span className="text-xs text-slate-400">
            reviewers moved to Review queue
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="5"
          value={reviewers}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="w-full accent-cyan-400"
        />
      </div>

      {/* IMPACT PREVIEW */}
      <div className="bg-black/30 rounded-lg p-4 mb-5">
        <p className="text-xs text-slate-400 mb-2">
          Predicted Impact (Preview)
        </p>

        <div className="flex justify-between items-center">
          <span className="text-sm">SLA Risk After Action</span>
          <span
            className={`font-bold ${
              previewRisk > 70
                ? "text-rose-400"
                : previewRisk > 40
                ? "text-yellow-400"
                : "text-emerald-400"
            }`}
          >
            {previewRisk}%
          </span>
        </div>

        {/* Risk meter */}
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden mt-3">
          <div
            className={`h-full ${
              previewRisk > 70
                ? "bg-rose-500"
                : previewRisk > 40
                ? "bg-yellow-400"
                : "bg-emerald-500"
            }`}
            style={{ width: `${previewRisk}%` }}
          />
        </div>
      </div>

      {/* WHY THIS WORKS */}
      <div className="text-xs text-slate-300 mb-4">
        💡 Increasing reviewer capacity reduces backlog accumulation and
        stabilizes SLA compliance.
      </div>

      {/* RUN SIMULATION */}
      <button
        onClick={() => onSimulate(reviewers)}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-semibold hover:scale-[1.02] transition"
      >
        ▶ Run Simulation
      </button>
    </div>
  );
}
