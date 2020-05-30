$(function() {
  chrome.storage.sync.get("phasePeriod", data => {
    $("#phasePeriod").text(data.phasePeriod);
  });

  $("#changePhasePeriod").click(() => {
    chrome.storage.sync.get("phasePeriod", data => {
      const newPhasePeriod = $("#newPhasePeriod").val();
      chrome.storage.sync.set({ phasePeriod: newPhasePeriod });

      $("#phasePeriod").text(newPhasePeriod);
      $("#newPhasePeriod").val("");
    });
  });
});
