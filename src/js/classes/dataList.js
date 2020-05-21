class DataList {
  constructor(parentEl) {
    this.container = $("<ul>");
    this.dataElements = [
      new DataElement(this.container, "Problems Solved", populatingTest),
      new DataElement(this.container, "Max Rate Problem", populatingTest),
      new DataElement(this.container, "Problems Rating Sum", populatingTest),
      new DataElement(this.container, "contests", populatingTest),
      new DataElement(this.container, "Virtuals", populatingTest)
    ];
    parentEl.append(this.container);
  }

  populate = () => {
    this.dataElements.forEach(element => element.populate());
  };
}
