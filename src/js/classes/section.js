class Section {
  constructor(parentEl) {
    this.wrapper = $("<div>");
    this.wrapper.addClass("sectionWrapper");

    this.SubmissionsChart = new SubmissionsChart(this.wrapper, populatingTest);
    this.header = new Header(this.wrapper);
    this.dataList = new DataList(this.wrapper);
    parentEl.append(this.wrapper);
  }
}
