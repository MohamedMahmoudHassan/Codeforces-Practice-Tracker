class DataList {
  constructor(parentEl) {
    this.wrapper = $("<ul>");
    this.dataElements = [
      new DataElement(this.wrapper, "Max Rating", populateUserMaxRating),
      new DataElement(this.wrapper, "Problems Solved", populateProblemsSolved),
      new DataElement(this.wrapper, "Submissions", populateSubmissions),
      new DataElement(this.wrapper, "Max Rate Problem", populateMaxRateProblem),
      new DataElement(this.wrapper, "Problems Average Rate", populateProblemsAverageRate),
      new DataElement(this.wrapper, "Contests Participation", populateContestsParticipation),
      new DataElement(this.wrapper, "Virtuals Participation", populateVirtualsParticipation)
    ];
    parentEl.append(this.wrapper);
  }

  populate(sectionAPIData) {
    this.dataElements.forEach(element => element.populate(sectionAPIData));
  }

  compare(prevDateList) {
    for (let i = 0; i < this.dataElements.length; i++)
      this.dataElements[i].compare(prevDateList.dataElements[i]);
  }
}
