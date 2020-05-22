class Header {
  constructor(parentEl, weekIndex) {
    this.wrapper = $("<div>");

    this.title = $("<h2>");
    if (!weekIndex) this.title.text("Current week");
    else this.title.text(`Previous week ${weekIndex}`);

    this.date = $("<p>").text("15 May 2020 - 22 May 2020");
    this.date.addClass("headerDate");

    this.wrapper.append(this.title, this.date);
    parentEl.append(this.wrapper);
  }
}
