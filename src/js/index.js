$(document).ready(function() {
  const page = $("#pageContent");
  page.empty();
  const section = new Section(page);
  window.setTimeout(section.SubmissionsChart.populate(), 2000);
});
