class DataElement {
  constructor(parentEl, title, populatingFunc) {
    this.title = $("<li>").text(title + ": ");
    this.title.addClass("dataElement");

    this.value = $("<span>").text("_");
    this.title.append(this.value);

    this.populatingFunc = populatingFunc;
    parentEl.append(this.title);
  }

  populate = () => {
    const value = this.populatingFunc();
    this.value.text(value);
  };
}
