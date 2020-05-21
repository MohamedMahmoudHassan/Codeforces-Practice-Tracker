class Section {
  constructor(parentEl) {
    this.container = $("<div>");
    this.container.addClass("section");

    this.header = new Header(this.container);
    this.dataList = new DataList(this.container);
    parentEl.append(this.container);
  }
}
