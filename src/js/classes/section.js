class Section {
  constructor(parentEl) {
    this.container = $("<div>");
    this.container.addClass("section");

    parentEl.append(this.container);
  }
}
