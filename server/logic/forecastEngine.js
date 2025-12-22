function forecastEngine(data) {
  let backlog = data.currentBacklog;
  const output = [];

  for (let hour = 1; hour <= 6; hour++) {
    backlog = backlog + data.incomingPerHour - data.processingCapacity;
    const slaRisk = Math.min(Math.round((backlog / 500) * 100), 100);

    output.push({
      hour,
      backlog,
      slaRisk
    });
  }

  return output;
}

module.exports = forecastEngine;