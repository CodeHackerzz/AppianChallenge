import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function ForecastChart({ data }) {
  return (
    <div className="border border-slate-700 rounded-lg p-6 bg-slate-800">
      <h3 className="font-medium mb-4">
        SLA Risk Forecast (Next 6 Hours)
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Line
            dataKey="slaRisk"
            stroke="#60a5fa"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}