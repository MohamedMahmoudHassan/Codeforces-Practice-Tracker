const loadStaticsTab = apiData => {
  const page = $("#pageContent");
  const tabsBar = page.find(".second-level-menu");
  const scripts = page.find("script");
  page.empty();
  page.append(tabsBar, scripts);

  const sections = [new Section(page, 0), new Section(page, 1)];
  sections.forEach(section => section.populate(apiData));

  const addSectionBtn = $("<button>").text("Show previous phase");
  page.append(addSectionBtn);
  addSectionBtn.click(() => {
    const section = new Section(page, sections.length);
    sections.push(section);
    section.populate(apiData);
    page.append(addSectionBtn);
  });
};
