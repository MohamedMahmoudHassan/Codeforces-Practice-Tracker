$(document).ready(function() {
  const app = {};
  chrome.storage.sync.get("phasePeriod", data => (app.phasePeriod = data.phasePeriod || 7));
  userStatics(app);
});
