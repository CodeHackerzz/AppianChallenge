export default function SmartAlert({ before, after }) {
  if (!before || !after) return null;

  const reasons = [];

  if (after.slaRisk > before.slaRisk) {
    reasons.push("Increase in incoming case volume");
  }
  if (after.backlog > before.backlog) {
    reasons.push("Insufficient reviewer capacity");
  }

  return (
    <div className="bg-rose-500/10 border border-rose-500/40 rounded-xl p-5 mt-8">
      <h4 className="font-semibold text-rose-300 mb-2">
        ⚠️ Why SLA Risk Increased
      </h4>

      <ul className="list-disc ml-5 text-sm text-slate-200">
        {reasons.length > 0 ? (
          reasons.map((r, i) => <li key={i}>{r}</li>)
        ) : (
          <li>No critical degradation detected</li>
        )}
      </ul>
    </div>
  );
}