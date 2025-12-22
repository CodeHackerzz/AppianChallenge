export default function KPI_Cards() {
  const stats = [
    {
      title: "Active Cases",
      value: "1,280",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Backlog",
      value: "420",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "SLA Risk",
      value: "78%",
      gradient: "from-red-500 to-pink-600",
    },
    {
      title: "Available Staff",
      value: "32",
      gradient: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Gradient Background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90`}
          ></div>

          {/* Glass Layer */}
          <div className="relative p-6 backdrop-blur-xl bg-black/30">
            <p className="text-sm uppercase tracking-widest text-white/80">
              {item.title}
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-white">
              {item.value}
            </h2>

            <div className="mt-4 h-1 w-12 bg-white rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}