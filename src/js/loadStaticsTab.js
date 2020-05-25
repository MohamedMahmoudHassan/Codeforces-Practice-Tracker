const loadStaticsTab = apiData => {
  const page = $("#pageContent");
  page.find(".roundbox").remove();
  page.find(".sectionWrapper").remove();
  page.find("button").remove();

  const sections = [new Section(page, 0)];
  sections.push(new Section(page, 1, sections[0]));
  sections.forEach(section => section.populate(apiData));

  new ButtonsSection(page, sections, apiData);
};
