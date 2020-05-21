class DataElement {
  constructor(parentEl, title) {
    this.title = $("<li>").text(title + ": ");
    this.title.addClass("dataElement");
    parentEl.append(this.title);
  }
}
