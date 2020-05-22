class Header {
  constructor(parentEl, phaseIndex) {
    this.wrapper = $("<div>");

    this.title = $("<h2>");
    if (!phaseIndex) this.title.text("Current phase");
    else this.title.text(`Previous phase #${phaseIndex}`);

    this.phaseStartDate = getPhaseStartDate(phaseIndex);
    this.phaseEndDate = getPhaseEndDate(phaseIndex);

    this.date = $("<p>").text(
      `${this.phaseStartDate.dateString} - ${this.phaseEndDate.dateString}`
    );
    this.date.addClass("headerDate");

    this.wrapper.append(this.title, this.date);
    parentEl.append(this.wrapper);
  }
}
