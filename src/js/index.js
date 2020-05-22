$(document).ready(function() {
  const page = $("#pageContent");
  page.empty();

  const sections = [new Section(page, 0), new Section(page, 1)];
  sections.forEach(section => section.populate());

  const addSectionBtn = $("<button>").text("Show previous phase");
  page.append(addSectionBtn);
  addSectionBtn.click(() => {
    const section = new Section(page, sections.length);
    sections.push(section);
    section.populate();
    page.append(addSectionBtn);
  });
});
