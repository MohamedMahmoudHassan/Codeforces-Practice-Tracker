class DataList {
  constructor(parentEl) {
    this.wrapper = $("<ul>");
    this.dataElements = [
      new DataElement(this.wrapper, "Problems Solved", populateProblemsSolved),
      new DataElement(this.wrapper, "Submissions", populateSubmissions),
      new DataElement(this.wrapper, "Max Rate Problem", populateMaxRateProblem),
      new DataElement(this.wrapper, "Problems Rating Sum", populateProblemsRatingSum),
      new DataElement(this.wrapper, "Contests Participation", populateContestsParticipation),
      new DataElement(this.wrapper, "Virtuals Participation", populateVirtualsParticipation)
    ];
    parentEl.append(this.wrapper);
  }

  populate = submissions => {
    this.dataElements.forEach(element => element.populate(submissions));
  };
}
