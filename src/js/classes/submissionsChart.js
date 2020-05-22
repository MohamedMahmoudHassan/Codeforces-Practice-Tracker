class SubmissionsChart {
  constructor(parentEl) {
    this.wrapper = $("<div>");
    this.wrapper.addClass("chartWrapper");

    parentEl.append(this.wrapper);
  }
}
