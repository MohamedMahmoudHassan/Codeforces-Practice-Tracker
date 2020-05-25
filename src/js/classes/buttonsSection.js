class ButtonsSection {
  constructor(parentEl, sections, apiData) {
    this.wrapper = $("<div>");
    this.addSectionBtn = $("<button>").text("Show previous phase");

    this.wrapper.append(this.addSectionBtn);
    parentEl.append(this.wrapper);

    this.addSectionBtn.click(() => this.addSection(parentEl, sections, apiData));
  }

  addSection = (page, sections, apiData) => {
    const section = new Section(page, sections.length, sections[sections.length - 1]);
    sections.push(section);
    section.populate(apiData);
    section.isLastSection ? this.wrapper.remove() : page.append(this.wrapper);
  };
}
