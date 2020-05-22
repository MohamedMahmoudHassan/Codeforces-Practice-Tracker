$(document).ready(function() {
  const page = $("#pageContent");
  page.empty();
  const sections = [new Section(page, 0), new Section(page, 1)];
  sections.forEach(section => window.setTimeout(section.SubmissionsChart.populate(), 2000));
});
