export default function DigitalTwin() {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
      <h3 className="font-semibold mb-4">
        Live Process Digital Twin
      </h3>

      <div className="grid grid-cols-3 gap-6 text-center">

        {}
        <div className="border border-slate-600 rounded-lg p-4">
          <p className="text-xs text-slate-400">INTAKE</p>
          <p className="text-2xl font-bold mt-1">120</p>
          <p className="text-xs text-emerald-400 mt-1">Normal Load</p>
        </div>

        {}
        <div className="border border-rose-500/50 bg-rose-500/20 rounded-lg p-4">
          <p className="text-xs">REVIEW</p>
          <p className="text-2xl font-bold mt-1">300</p>
          <p className="text-xs text-rose-300 mt-1">Bottleneck</p>
        </div>

        {}
        <div className="border border-slate-600 rounded-lg p-4">
          <p className="text-xs text-slate-400">APPROVAL</p>
          <p className="text-2xl font-bold mt-1">80</p>
          <p className="text-xs text-slate-400 mt-1">Under-utilized</p>
        </div>

      </div>

      <p className="text-xs text-slate-400 mt-4">
        Numbers update dynamically based on simulation & workload changes
      </p>
    </div>
  );
}
