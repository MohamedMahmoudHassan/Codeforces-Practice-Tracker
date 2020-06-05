class Section {
  constructor(parentEl, app) {
    const { phasePeriod, sections } = app;

    this.wrapper = $("<div>");
    this.wrapper.addClass("sectionWrapper");

    this.sectionIndex = sections.length;
    this.phaseStartDate = getPhaseStartDate(this.sectionIndex, phasePeriod);
    this.phaseEndDate = getPhaseEndDate(this.sectionIndex, phasePeriod);

    this.SubmissionsChart = new SubmissionsChart(this.wrapper, populateChart);
    this.header = new Header(this.wrapper, this);
    this.dataList = new DataList(this.wrapper);

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

    this.SubmissionsChart.populate(sectionAPIData.submissions);
    this.dataList.populate(sectionAPIData);
    if (this.sectionIndex) sections[this.sectionIndex - 1].compare(this);
  }

  compare(prevSection) {
    this.dataList.compare(prevSection.dataList);
  }
}
