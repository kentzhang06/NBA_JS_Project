function createBarChart(pts, asts, rebs, stls, blks, to) {
  let canvas = document.createElement("canvas");
  canvas.setAttribute('id', "mycanvas2");
  document.getElementById("canvas-container").appendChild(canvas);

  const data = {
    labels: ["Points", "Assists", "Rebounds", "Steals", "Blocks", "Turnover"],
    datasets: [
      {
        label: null,
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
        ticks: {
          color: "white",
          showLabelBackdrop: false,
        },
      },
      x: {
        ticks: {
          color: "white"
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        color: "white",
        text: "Season Averages",
        font: {
          size: 30
        },
        padding: {
          top: 10,
          bottom: 20
        }
      }
    }
  };

  let barChart = new Chart(canvas, {
    type: "bar",
    data: data,
    options: chartOptions
  });

  return barChart;
}

export {createBarChart};