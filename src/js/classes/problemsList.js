class ProblemsList {
  constructor(parentEl, section) {
    this.wrapper = $("<div>");
    this.wrapper.addClass("problemsList");

    this.columns = [$("<ul>"), $("<ul>")];
    this.columns.forEach(column => {
      column.addClass("problemsListColumn");
      this.wrapper.append(column);
    });

    this.columns[0].addClass("right");
    this.columnsId = 1;

    this.wrapper.addClass("hide");
    this.ProblemsList = $("<ul>");

    this.wrapper.append(this.ProblemsList);
    parentEl.append(this.wrapper);
  }

  populate(sectionAPIData) {
    this.data = getProblemsList(sectionAPIData.submissions);
    this.data.forEach(problem => {
      this.columns[this.columnsId].append(problem);
      this.columnsId = (this.columnsId + 1) % 2;
    });
  }
}
