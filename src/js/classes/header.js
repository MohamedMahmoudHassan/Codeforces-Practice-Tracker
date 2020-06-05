class Header {
  constructor(parentEl, section) {
    const { sectionIndex, phaseStartDate, phaseEndDate } = section;
    this.wrapper = $("<div>");

    this.title = $("<h2>");
    if (!sectionIndex) this.title.text("Current phase");
    else this.title.text(`Previous phase #${sectionIndex}`);

    this.date = $("<p>").text(`${phaseStartDate.dateString} - ${phaseEndDate.dateString}`);
    this.date.addClass("headerDate");

    this.wrapper.append(this.title, this.date);
    parentEl.append(this.wrapper);
  }
}
