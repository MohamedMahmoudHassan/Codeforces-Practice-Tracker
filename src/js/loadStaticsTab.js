const loadStaticsTab = (parentEl, apiData, phaseTime) => {
  parentEl.find("div").remove();
  const sections = [];
  if (apiData.submissions.length) {
    sections.push(new Section(parentEl, phaseTime, 0));
    sections[0].populate(apiData);

    if (!sections[0].isLastSection) {
      sections.push(new Section(parentEl, phaseTime, 1, sections[0]));
      sections[1].populate(apiData);
    }
  }

  new ButtonsSection(parentEl, sections, apiData, phaseTime);
};
