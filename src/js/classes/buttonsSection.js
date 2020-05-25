class ButtonsSection {
  constructor(parentEl, sections, apiData) {
    this.wrapper = $("<div>");
    this.wrapper.addClass("buttonsSection");

    this.addSectionBtn = $("<button>").text("Show previous phase");
    this.addActiveSectionBtn = $("<button>").text("Show previous active phase");

    this.wrapper.append(this.addSectionBtn);
    this.wrapper.append(this.addActiveSectionBtn);
    parentEl.append(this.wrapper);

    this.addSectionBtn.click(() => this.addSection(parentEl, sections, apiData));
    this.addActiveSectionBtn.click(() => this.addActiveSection(parentEl, sections, apiData));
  }

  addSection = (page, sections, apiData) => {
    const section = new Section(page, sections.length, sections[sections.length - 1]);
    sections.push(section);
    section.populate(apiData);
    section.isLastSection ? this.wrapper.remove() : page.append(this.wrapper);
    return section;
  };

  addActiveSection = (page, sections, apiData) => {
    const section = this.addSection(page, sections, apiData);
    if (!section.isLastSection && !section.activeSection)
      this.addActiveSection(page, sections, apiData);
  };
}
