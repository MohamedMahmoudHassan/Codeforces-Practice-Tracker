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

  fetchAPIData(handle).then(apiData => loadStaticsTab(staticsTab, apiData, 7));
});
