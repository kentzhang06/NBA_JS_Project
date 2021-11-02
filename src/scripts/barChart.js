function createBarChart(pts, asts, rebs, stls, blks, to) {
  let canvas = document.createElement("canvas");
  canvas.setAttribute('id', "mycanvas2");
  document.getElementById("canvas-container").appendChild(canvas);

  const data = {
    labels: [
      "Points",
      "Assists",
      "Rebounds",
      "Steals",
      "Blocks",
      "Turnover",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [pts, asts, rebs, stls, blks, to],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
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

  return barChart;
}

export {createBarChart};