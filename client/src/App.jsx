import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true); // FORCE DASHBOARD

  return (
    <div className="min-h-screen">
      {loggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}