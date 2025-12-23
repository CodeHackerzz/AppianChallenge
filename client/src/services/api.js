const BASE_URL = "https://appian-mvp-backend.onrender.com";

export const fetchDashboard = async () => {
  const res = await fetch(`${BASE_URL}/dashboard`);
  return res.json();
};

export const fetchForecast = async () => {
  const res = await fetch(`${BASE_URL}/forecast`);
  return res.json();
};

export const runWhatIf = async (reviewersMoved) => {
  const res = await fetch(`${BASE_URL}/whatif`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reviewersMoved })
  });
  return res.json();
};
