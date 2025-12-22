function recommendation(beforeRisk, afterRisk) {
  if (afterRisk < beforeRisk) {
    return `Move reviewers → SLA risk drops from ${beforeRisk}% to ${afterRisk}%`;
  }
  return "No improvement detected";
}

module.exports = recommendation;