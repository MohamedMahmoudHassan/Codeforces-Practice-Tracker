const loadStaticsTab = (parentEl, apiData, phaseTime) => {
  const sections = [new Section(parentEl, phaseTime, 0)];
  sections.push(new Section(parentEl, phaseTime, 1, sections[0]));
  sections.forEach(section => section.populate(apiData));

  new ButtonsSection(parentEl, sections, apiData, phaseTime);
};
