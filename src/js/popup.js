$(function() {
  chrome.storage.sync.get("phasePeriod", data => {
    $("#phasePeriod").text(data.phasePeriod);
  });

  $("#changePhasePeriod").click(() => {
    chrome.storage.sync.get("phasePeriod", () => {
      const newPhasePeriod = $("#newPhasePeriod").val();
      if (newPhasePeriod > 365 || newPhasePeriod < 1) {
        $(".warning").addClass("active");
        return;
      }

      chrome.storage.sync.set({ phasePeriod: newPhasePeriod });

      $("#phasePeriod").text(newPhasePeriod);
      $("#newPhasePeriod").val("");
      $(".warning").removeClass("active");
    });
  });
});
