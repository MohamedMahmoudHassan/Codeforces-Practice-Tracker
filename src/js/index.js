$(document).ready(function() {
  const page = $("#pageContent");
  page.empty();
  const section = new Section(page);
  window.setTimeout(section.dataList.populate(), 2000);
});
