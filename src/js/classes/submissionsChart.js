class SubmissionsChart {
  constructor(parentEl, populatingFunc) {
    this.wrapper = $("<div>");
    this.wrapper.addClass("chartWrapper");

    this.chart = $("<canvas>");
    this.chart[0].width = 100;
    this.chart[0].height = 100;

    this.ctx = this.chart[0].getContext("2d");

    this.populatingFunc = populatingFunc;
    this.wrapper.append(this.chart);
    parentEl.append(this.wrapper);
  }

  populate = submissions => {
    const chartData = this.populatingFunc(submissions);
    new Chart(this.ctx, {
      type: "doughnut",
      data: {
        labels: ["AC", "WA", "TLE", "Others"],
        datasets: [
          {
            label: "Submissions Statics",
            data: chartData,
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
  };
}
