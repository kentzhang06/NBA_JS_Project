function createPieChart(fg, fg3, ft) {
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "mycanvas");
  document.getElementById("canvas-container").appendChild(canvas);

  let birdsData = {
    labels: ["Field Goal %", "3-Pointer %", "Free Throw %"],
    datasets: [
      {
        data: [
          fg, 
          fg3, 
          ft
        ],
        backgroundColor: [
          "rgba(255, 0, 0, 0.6)",
          "rgba(0, 255, 200, 0.6)",
          "rgba(200, 0, 200, 0.6)",
        ],
        borderColor: "rgba(0, 0, 0, 0.8)",
      },
    ],
  };

  let chartOptions = {
    startAngle: -Math.PI / 3,
    legend: {
      position: "right",
    },
    animation: {
      animateRotate: true,
    },
    plugins: {
      legend: {
        labels: {
          color: "red",
        },
      },
    },
    scales: {
      r: {
        max: 1,
        min: -1,
        ticks: {
          color: "red",
          backdropColor: "green"
        }
      },
      pointLabels: {
        color: "red"
      }
    },
  };

  let polarAreaChart = new Chart(canvas, {
    type: "polarArea",
    data: birdsData,
    options: chartOptions,
  });

  return polarAreaChart;
}

export {createPieChart};