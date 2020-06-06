class Section {
  constructor(parentEl, app) {
    const { phasePeriod, sections } = app;

    this.wrapper = $("<div>");
    this.wrapper.addClass("sectionWrapper");

    this.sectionIndex = sections.length;
    this.phaseStartDate = getPhaseStartDate(this.sectionIndex, phasePeriod);
    this.phaseEndDate = getPhaseEndDate(this.sectionIndex, phasePeriod);

    this.sectionInfo = new SectionInfo(this.wrapper, this);
    this.toggleButton = new SectionToggleButton(this.wrapper, this);
    this.problemsList = new ProblemsList(this.wrapper, this);

    sections.push(this);
    parentEl.append(this.wrapper);
  }

  populate(app) {
    const { sections, apiData } = app;
    const sectionAPIData = sliceAPIData(
      apiData,
      this.phaseStartDate.timeStamp / 1000,
      this.phaseEndDate.timeStamp / 1000
    );
    this.isLastSection = sectionAPIData.isLastSection;
    this.activeSection = sectionAPIData.submissions.length > 0;

    this.sectionInfo.populate(sectionAPIData);
    this.problemsList.populate(sectionAPIData);
    if (this.sectionIndex) sections[this.sectionIndex - 1].compare(this);
  }

  compare(prevSection) {
    this.sectionInfo.compare(prevSection.sectionInfo);
  }
}
