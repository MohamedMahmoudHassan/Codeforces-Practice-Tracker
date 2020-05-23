class Section {
  constructor(parentEl, phaseIndex) {
    this.wrapper = $("<div>");
    this.wrapper.addClass("sectionWrapper");

    this.phaseStartDate = getPhaseStartDate(phaseIndex);
    this.phaseEndDate = getPhaseEndDate(phaseIndex);

    this.SubmissionsChart = new SubmissionsChart(this.wrapper, populateChart);
    this.header = new Header(this.wrapper, phaseIndex, this.phaseStartDate, this.phaseEndDate);
    this.dataList = new DataList(this.wrapper);
    parentEl.append(this.wrapper);
  }

  populate = apiData => {
    const sectionAPIData = sliceAPIData(
      apiData,
      this.phaseStartDate.timeStamp / 1000,
      this.phaseEndDate.timeStamp / 1000
    );
    this.SubmissionsChart.populate(sectionAPIData.submissions);
    this.dataList.populate(sectionAPIData);
  };
}
