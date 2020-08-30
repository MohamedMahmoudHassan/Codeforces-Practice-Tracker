const userStatics = app => {
  const handle = $("h1 a").text();
  const page = $("#pageContent");

  const staticsTabButton = addStaticsTabButton();
  const staticsTab = $("<div>");
  staticsTab.append(addLoadingMessage());

  staticsTabButton.click(() => {
    page.find(".roundbox").remove();
    page.append(staticsTab);
  });

  app.sections = [];
  fetchAPIData(handle).then(apiData => {
    app.apiData = apiData;
    loadStaticsTab(staticsTab, app);
  });
};
