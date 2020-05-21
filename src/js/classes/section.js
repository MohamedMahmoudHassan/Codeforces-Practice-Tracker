class Section {
  constructor(parentEl) {
    this.container = $("<div>");
    this.container.addClass("section");

    this.header = new Header(this.container);
    parentEl.append(this.container);
  }
}
