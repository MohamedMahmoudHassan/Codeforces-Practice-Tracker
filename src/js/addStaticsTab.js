const addStaticsTab = () => {
  const staticsTab = $("<li>");

  const tabTitle = $("<a>").text("Statics");
  tabTitle.attr("href", "#");
  tabTitle.attr("id", "staticsTabTitle");

  staticsTab.append(tabTitle);

  $(".second-level-menu-list li")
    .eq(1)
    .after(staticsTab);

  return staticsTab;
};
