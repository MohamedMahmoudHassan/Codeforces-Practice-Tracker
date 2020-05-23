$(document).ready(function() {
  const handle = $("h1 a").text();
  connectToAPI(handle).then(apiData => {
    const staticsTab = addStaticsTab();
    staticsTab.click(() => loadStaticsTab(apiData));
  });
});
