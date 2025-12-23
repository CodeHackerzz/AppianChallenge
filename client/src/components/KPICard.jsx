export default function KPICard({ title, value, color }) {
  return (
    <div className={`p-6 rounded-xl shadow bg-gradient-to-br ${color}`}>
      <p className="text-sm opacity-80">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}