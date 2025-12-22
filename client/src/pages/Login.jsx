export default function Login({ onLogin }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-black">
      <div className="backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-2xl w-[380px] border border-white/20">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Appian Ops Center
        </h1>

        <input
          type="text"
          placeholder="Manager ID"
          className="w-full p-3 mb-4 rounded-lg bg-black/30 text-white placeholder-gray-400 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg bg-black/30 text-white placeholder-gray-400 outline-none"
        />

        <button
          onClick={onLogin}
          className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold"
        >
          Login
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          Predictive Process Simulation
        </p>
      </div>
    </div>
  );
}