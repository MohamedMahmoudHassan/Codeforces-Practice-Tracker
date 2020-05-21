class DataList {
  constructor(parentEl) {
    this.container = $("<ul>");
    new DataElement(this.container, "Problems Solved");
    new DataElement(this.container, "Max Rate Problem");
    new DataElement(this.container, "Problems Rating Sum");
    new DataElement(this.container, "contests");
    new DataElement(this.container, "Virtuals");
    parentEl.append(this.container);
  }
}
