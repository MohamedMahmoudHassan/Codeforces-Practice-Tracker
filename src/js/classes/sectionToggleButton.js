class SectionToggleButton {
  constructor(parentEl, section) {
    this.button = $("<button>");
    this.buttonTextValues = ["Show Solved Problems", "Back"];
    this.buttonTextId = 0;

    this.button.html(this.buttonTextValues[this.buttonTextId]);
    this.button.click(() => {
      $([section.sectionInfo.wrapper, section.problemsList.wrapper]).toggleClass("hide");
      this.buttonTextId = (this.buttonTextId + 1) % 2;
      this.button.html(this.buttonTextValues[this.buttonTextId]);
    });

    parentEl.append(this.button);
  }
}
