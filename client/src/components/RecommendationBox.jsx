export default function RecommendationBox() {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-xl">
      <h2 className="text-xl font-semibold mb-4">
        Smart Recommendations
      </h2>

      <ul className="space-y-4 text-gray-300">
        <li>✔ Move 2 reviewers to Review queue</li>
        <li>✔ SLA risk drops from 78% → 15%</li>
        <li>✔ Backlog clears in under 3 hours</li>
      </ul>
    </div>
  );
}