class Header {
  constructor(parentEl, phaseIndex, phaseStartDate, phaseEndDate) {
    this.wrapper = $("<div>");

    this.title = $("<h2>");
    if (!phaseIndex) this.title.text("Current phase");
    else this.title.text(`Previous phase #${phaseIndex}`);

    this.date = $("<p>").text(`${phaseStartDate.dateString} - ${phaseEndDate.dateString}`);
    this.date.addClass("headerDate");

    this.wrapper.append(this.title, this.date);
    parentEl.append(this.wrapper);
  }
}
