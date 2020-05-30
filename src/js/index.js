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

  let phaseTime = 7;
  chrome.storage.sync.get("phasePeriod", data => (phaseTime = data.phasePeriod || 7));

  fetchAPIData(handle).then(apiData => loadStaticsTab(staticsTab, apiData, phaseTime));
});
