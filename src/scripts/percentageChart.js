function createPieChart(fg, fg3, ft) {
  let birdsCanvas = document.getElementById("mycanvas");

  // Chart.defaults.global.defaultFontFamily = "Lato";
  // Chart.defaults.global.defaultFontSize = 18;
  // console.log(player.fg_pct);
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
          "rgba(0, 255,200, 0.6)",
          "rgba(200, 0, 200, 0.6)",
        ],
        borderColor: "rgba(0, 0, 0, 0.8)",
      },
    ],
  };

  let chartOptions = {
    startAngle: -Math.PI / 3,
    legend: {
      position: 'right',
    },
    animation: {
      animateRotate: true,
    },
  };

  let polarAreaChart = new Chart(birdsCanvas, {
    type: "polarArea",
    data: birdsData,
    options: chartOptions,
  });
}

export {createPieChart};