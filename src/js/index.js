$(document).ready(function() {
  const handle = $("h1 a").text();
  const page = $("#pageContent");

  const staticsTabButton = addStaticsTabButton();
  const staticsTab = $("<div>");
  staticsTab.append(addLoadingMessage());

  staticsTabButton.click(() => {
    page.find(".roundbox").remove();
    page.append(staticsTab);
  });

  const app = {};
  app.sections = [];

  chrome.storage.sync.get("phasePeriod", data => (app.phasePeriod = data.phasePeriod || 7));

  fetchAPIData(handle).then(apiData => {
    app.apiData = apiData;
    loadStaticsTab(staticsTab, app);
  });
});
