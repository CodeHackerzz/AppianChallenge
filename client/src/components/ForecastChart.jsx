import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceArea,
  ReferenceLine,
  ReferenceDot,
  Legend
} from "recharts";

export default function ForecastChart({ data }) {
  // Simulated "before" values for comparison
  const beforeData = data.map(d => ({
    ...d,
    slaRiskBefore: d.slaRisk + 20 > 100 ? 100 : d.slaRisk + 20
  }));

  // Find predicted breach point
  const breachPoint = data.find(d => d.slaRisk >= 80);

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
      <h3 className="font-semibold mb-1">
        SLA Risk Forecast (Next Hours)
      </h3>
      <p className="text-xs text-slate-400 mb-4">
        Visualizing risk thresholds, predicted failure, and decision impact
      </p>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={beforeData}>
          {/* SLA Risk Zones */}
          <ReferenceArea y1={0} y2={50} fill="#22c55e" fillOpacity={0.12} />
          <ReferenceArea y1={50} y2={80} fill="#facc15" fillOpacity={0.12} />
          <ReferenceArea y1={80} y2={100} fill="#ef4444" fillOpacity={0.12} />

          {/* SLA Limit Line */}
          <ReferenceLine
            y={80}
            stroke="#ef4444"
            strokeDasharray="4 4"
            label={{ value: "SLA Limit", position: "right", fill: "#ef4444" }}
          />

          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />

          <XAxis
            dataKey="hour"
            label={{ value: "Hours Ahead", position: "insideBottom", offset: -5 }}
            tick={{ fill: "#cbd5f5" }}
          />

          <YAxis
            domain={[0, 100]}
            tick={{ fill: "#cbd5f5" }}
            label={{
              value: "SLA Risk %",
              angle: -90,
              position: "insideLeft",
              fill: "#cbd5f5"
            }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.2)"
            }}
            labelStyle={{ color: "#e5e7eb" }}
          />

          <Legend />

          {/* BEFORE (dashed) */}
          <Line
            type="monotone"
            dataKey="slaRiskBefore"
            stroke="#f87171"
            strokeDasharray="6 6"
            name="Before Action"
            dot={false}
          />

          {/* AFTER (solid) */}
          <Line
            type="monotone"
            dataKey="slaRisk"
            stroke="#22c55e"
            strokeWidth={3}
            name="After Action"
            dot={{ r: 3 }}
          />

          {/* Predicted Breach Marker */}
          {breachPoint && (
            <ReferenceDot
              x={breachPoint.hour}
              y={breachPoint.slaRisk}
              r={6}
              fill="#ef4444"
              stroke="white"
              label={{
                value: "Predicted Breach",
                position: "top",
                fill: "#ef4444",
                fontSize: 12
              }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>

      {/* Legend explanation */}
      <div className="flex justify-between text-xs text-slate-400 mt-4">
        <span>🟢 Safe</span>
        <span>🟡 Watch</span>
        <span>🔴 Critical</span>
      </div>
    </div>
  );
}
