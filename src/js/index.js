$(document).ready(function() {
  const handle = $("h1 a").text();
  connectToAPI(handle).then(submissions => {
    const staticsTab = addStaticsTab();
    staticsTab.click(() => loadStaticsTab(submissions));
  });
});
