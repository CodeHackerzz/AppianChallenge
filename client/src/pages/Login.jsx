import { useState } from "react";

export default function Login({ onLogin }) {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 relative overflow-hidden">

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 w-[420px] shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-1">
          Operations Intelligence
        </h1>
        <p className="text-sm text-slate-300 mb-8">
          Predict • Simulate • Prevent SLA Breaches
        </p>

        <input
          placeholder="Manager ID"
          className="w-full mb-4 p-3 rounded-lg bg-black/30 border border-white/20 text-white outline-none"
        />

        <div className="relative mb-6">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-black/30 border border-white/20 text-white outline-none pr-10"
          />
          <span
            onClick={() => setShow(!show)}
            className="absolute right-3 top-3 cursor-pointer text-slate-300"
          >
            {show ? "🙈" : "👁"}
          </span>
        </div>

        <button
          onClick={onLogin}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 text-black font-semibold hover:scale-[1.02] transition"
        >
          Enter Operations Center →
        </button>

        <p className="text-xs text-slate-400 mt-6 text-center">
          Demo mode • No real credentials
        </p>
      </div>
    </div>
  );
}
