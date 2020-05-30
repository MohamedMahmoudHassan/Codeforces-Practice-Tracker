$(document).ready(function() {
  const handle = $("h1 a").text();
  const page = $("#pageContent");
  const staticsTabButton = addStaticsTabButton();
  const staticsTab = $("<div>");

  staticsTabButton.click(() => {
    page.find(".roundbox").remove();
    page.find(".sectionWrapper").remove();
    page.find("button").remove();
    page.append(staticsTab);
  });

  connectToAPI(handle).then(apiData => loadStaticsTab(staticsTab, apiData, 7));
});
