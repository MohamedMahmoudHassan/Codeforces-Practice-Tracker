class Section {
  constructor(parentEl) {
    this.el = $("<div>");
    this.el.addClass("section");
    parentEl.append(this.el);
  }
}
