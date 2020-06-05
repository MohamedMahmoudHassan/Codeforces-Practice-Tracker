class ButtonsSection {
  constructor(parentEl, app) {
    const { sections } = app;
    this.wrapper = $("<div>");
    this.wrapper.addClass("buttonsSection");
    this.buttonsAlt = $("<h4>").text("There are no older phases.");

    this.addSectionBtn = $("<button>").text("Show previous phase");
    this.addActiveSectionBtn = $("<button>").text("Show previous active phase");

    if (sections.length === 2 && !sections[1].isLastSection) {
      this.wrapper.append(this.addSectionBtn);
      this.wrapper.append(this.addActiveSectionBtn);
    } else this.wrapper.append(this.buttonsAlt);
    parentEl.append(this.wrapper);

    this.addSectionBtn.click(() => this.addSection(parentEl, app));
    this.addActiveSectionBtn.click(() => this.addActiveSection(parentEl, app));
  }

  addSection(page, app) {
    const section = new Section(page, app);
    section.populate(app);

    if (section.isLastSection) {
      this.addSectionBtn.remove();
      this.addActiveSectionBtn.remove();
      this.wrapper.append(this.buttonsAlt);
    }
    page.append(this.wrapper);
    return section;
  }

  addActiveSection(page, app) {
    const section = this.addSection(page, app);
    if (!section.isLastSection && !section.activeSection) this.addActiveSection(page, app);
  }
}
