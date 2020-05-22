class SubmissionsChart {
  constructor(parentEl) {
    this.wrapper = $("<div>");
    this.wrapper.addClass("chartWrapper");

    this.canvas = $("<canvas>");
    this.canvas[0].width = 100;
    this.canvas[0].height = 100;

    this.ctx = this.canvas[0].getContext("2d");
    this.chart = new Chart(this.ctx, {
      type: "doughnut",
      data: {
        labels: ["AC", "WA", "TLE", "Others"],
        datasets: [
          {
            label: "Submissions Statics",
            data: [8, 5, 3, 1],
            backgroundColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)"
            ]
          }
        ]
      },
      options: {
        legend: {
          position: "bottom"
        }
      }
    });

    this.wrapper.append(this.canvas);
    parentEl.append(this.wrapper);
  }
}
