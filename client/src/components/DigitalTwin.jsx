export default function DigitalTwin() {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-xl">
      <h2 className="text-xl font-semibold mb-4">
        Digital Twin Snapshot
      </h2>

      <div className="space-y-4 text-gray-300">
        <div className="flex justify-between">
          <span>Intake Queue</span>
          <span className="font-semibold">300</span>
        </div>
        <div className="flex justify-between">
          <span>Review Queue</span>
          <span className="font-semibold">720</span>
        </div>
        <div className="flex justify-between">
          <span>Approval Queue</span>
          <span className="font-semibold">260</span>
        </div>
      </div>
    </div>
  );
}