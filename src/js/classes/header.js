class Header {
  constructor(parentEl, phaseIndex) {
    this.wrapper = $("<div>");

    this.title = $("<h2>");
    if (!phaseIndex) this.title.text("Current phase");
    else this.title.text(`Previous phase #${phaseIndex}`);

    this.date = $("<p>").text("15 May 2020 - 22 May 2020");
    this.date.addClass("headerDate");

    this.wrapper.append(this.title, this.date);
    parentEl.append(this.wrapper);
  }
}
