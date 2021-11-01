function createBarChart(pts, asts, rebs, stls, blks, to, gp) {
  let child = document.createElement("canvas");
  let canvas = document.getElementById("mycanvas2");

  const data = {
    labels: [
      "Points",
      "Assists",
      "Rebounds",
      "Steals",
      "Blocks",
      "Turnover",
      "Games Played",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [pts, asts, rebs, stls, blks, to, gp],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  let chartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
  };

  let barChart = new Chart(canvas, {
    type: "bar",
    data: data,
    options: chartOptions
  });

  // return barChart;
}

export {createBarChart};