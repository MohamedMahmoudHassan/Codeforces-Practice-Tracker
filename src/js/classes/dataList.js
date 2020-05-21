class DataList {
  constructor(parentEl) {
    this.container = $("<ul>");
    new DataElement(this.container, "Problems solved");
    parentEl.append(this.container);
  }
}
