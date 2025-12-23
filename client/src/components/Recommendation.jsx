export default function Recommendation({ before, after }) {
  return (
    <div className="border border-emerald-500/40 bg-emerald-500/10 rounded-xl p-5">
      <div className="flex items-center justify-between mb-2">
        <p className="font-semibold text-emerald-300">
          AI Recommendation
        </p>
        <span className="text-xs px-2 py-1 rounded bg-emerald-400/20 text-emerald-300">
          High Confidence
        </span>
      </div>

      <p className="text-sm text-slate-200">
        Reallocating <b>2 reviewers</b> is projected to reduce SLA breach risk
        from <b className="text-rose-400">{before}%</b> to{" "}
        <b className="text-emerald-400">{after}%</b>.
      </p>

      {/* visual impact bar */}
      <div className="mt-4">
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-500 to-emerald-400"
            style={{ width: "80%" }}
          ></div>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Estimated improvement impact
        </p>
      </div>
    </div>
  );
}