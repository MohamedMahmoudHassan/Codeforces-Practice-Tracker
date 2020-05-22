class Section {
  constructor(parentEl, phaseIndex) {
    this.wrapper = $("<div>");
    this.wrapper.addClass("sectionWrapper");

    this.SubmissionsChart = new SubmissionsChart(this.wrapper, populatingTest);
    this.header = new Header(this.wrapper, phaseIndex);
    this.dataList = new DataList(this.wrapper);
    parentEl.append(this.wrapper);
  }
}
