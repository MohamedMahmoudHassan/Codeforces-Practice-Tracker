class DataElement {
  constructor(parentEl, title) {
    this.title = $("<li>").text(title + ": ");
    this.title.addClass("dataElement");

    this.value = $("<span>").text("_");
    this.title.append(this.value);

    parentEl.append(this.title);
  }
}
