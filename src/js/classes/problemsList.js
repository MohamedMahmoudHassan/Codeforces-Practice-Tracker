class ProblemsList {
  constructor(parentEl, section) {
    this.wrapper = $("<div>").attr("id", "problemsList");
    this.wrapper.addClass("hide");
    this.ProblemsList = $("<ul>");

    this.wrapper.append(this.ProblemsList);
    parentEl.append(this.wrapper);
  }

  populate(sectionAPIData) {
    this.data = getProblemsList(sectionAPIData.submissions);
    this.data.forEach(problem => this.ProblemsList.append(problem));
  }
}
