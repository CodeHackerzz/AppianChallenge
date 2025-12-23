export default function GlassStat({ label, value, highlight }) {
  return (
    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 shadow-lg overflow-hidden">
      {highlight && (
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent"></div>
      )}
      <p className="text-sm text-slate-300 relative">{label}</p>
      <p className="text-4xl font-bold mt-2 relative">{value}</p>
    </div>
  );
}