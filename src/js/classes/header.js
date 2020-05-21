class Header {
  constructor(parentEl, weekIndex) {
    this.title = $("<h2>");
    if (!weekIndex) this.title.text("Current week");
    else this.title.text(`Previous week ${weekIndex}`);

    parentEl.append(this.title);
  }
}
