class DataElement {
  constructor(parentEl, title, populatingFunc) {
    this.title = $("<li>").text(title + ": ");
    this.title.addClass("dataElement");

    this.value = $("<span>").text("_");
    this.title.append(this.value);

    this.populatingFunc = populatingFunc;
    parentEl.append(this.title);
  }

  populate(apiData) {
    this.data = this.populatingFunc(apiData);
    this.value.empty();
    this.value.append(this.data);
  }

  getValue() {
    const valueText = this.value.text().split(" - ");
    const value = valueText[valueText.length - 1];
    return value === "_" ? 0 : parseFloat(value);
  }

  compare(prevDataElement) {
    if (this.getValue() > prevDataElement.getValue()) this.value.addClass("up");
    if (this.getValue() < prevDataElement.getValue()) this.value.addClass("down");
  }
}
