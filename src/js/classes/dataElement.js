class DataElement {
  constructor(parentEl, title, populatingFunc) {
    this.title = $("<li>").text(title + ": ");
    this.title.addClass("dataElement");

    this.value = $("<span>").text("_");
    this.title.append(this.value);

    this.populatingFunc = populatingFunc;
    parentEl.append(this.title);
  }

  populate = submissions => {
    const data = this.populatingFunc(submissions);
    this.value.empty();
    this.value.append(data);
  };
}
