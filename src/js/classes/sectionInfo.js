class SectionInfo {
  constructor(parentEl, section) {
    this.wrapper = $("<div>");

    this.SubmissionsChart = new SubmissionsChart(this.wrapper, populateChart);
    this.header = new Header(this.wrapper, section);
    this.dataList = new DataList(this.wrapper);

    parentEl.append(this.wrapper);
  }

  populate(sectionAPIData) {
    this.SubmissionsChart.populate(sectionAPIData.submissions);
    this.dataList.populate(sectionAPIData);
    if (this.sectionIndex) sections[this.sectionIndex - 1].compare(this);
  }

  compare(prevSection) {
    this.dataList.compare(prevSection.dataList);
  }
}
