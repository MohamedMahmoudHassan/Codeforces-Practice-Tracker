$(document).ready(function() {
  const handle = $("h1 a").text();
  const request = new XMLHttpRequest();
  request.open("GET", `https://codeforces.com/api/user.status?handle=${handle}`, true);

  request.onload = function() {
    const submissions = JSON.parse(this.response).result;
    loadStaticsTab(submissions);
  };
  request.send();
});
