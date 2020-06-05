const loadStaticsTab = (parentEl, app) => {
  const { apiData, sections } = app;

  parentEl.find("div").remove();
  if (apiData.submissions.length) {
    new Section(parentEl, app);
    sections[0].populate(app);

    if (!sections[0].isLastSection) {
      new Section(parentEl, app);
      sections[1].populate(app);
    }
  }

  new ButtonsSection(parentEl, app);
};
