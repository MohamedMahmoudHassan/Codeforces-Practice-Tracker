class DataList {
  constructor(parentEl) {
    this.wrapper = $("<ul>");
    this.dataElements = [
      new DataElement(this.wrapper, "Problems Solved", populatingTest),
      new DataElement(this.wrapper, "Max Rate Problem", populatingTest),
      new DataElement(this.wrapper, "Problems Rating Sum", populatingTest),
      new DataElement(this.wrapper, "contests", populatingTest),
      new DataElement(this.wrapper, "Virtuals", populatingTest)
    ];
    parentEl.append(this.wrapper);
  }

  populate = () => {
    this.dataElements.forEach(element => element.populate());
  };
}
