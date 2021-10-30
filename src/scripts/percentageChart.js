// const config = {
//   type: "polarArea",
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Chart.js Polar Area Chart",
//       },
//     },
//   },
// };


// const DATA_COUNT = 5;
// const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

// const labels = ["Red", "Orange", "Yellow", "Green", "Blue"];
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: Utils.numbers(NUMBER_CFG),
//       backgroundColor: [
//         Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//         Utils.transparentize(Utils.CHART_COLORS.orange, 0.5),
//         Utils.transparentize(Utils.CHART_COLORS.yellow, 0.5),
//         Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
//         Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
//       ],
//     },
//   ],
// };

// const actions = [
//   {
//     name: "Randomize",
//     handler(chart) {
//       chart.data.datasets.forEach((dataset) => {
//         dataset.data = Utils.numbers({
//           count: chart.data.labels.length,
//           min: 0,
//           max: 100,
//         });
//       });
//       chart.update();
//     },
//   },
//   {
//     name: "Add Data",
//     handler(chart) {
//       const data = chart.data;
//       if (data.datasets.length > 0) {
//         data.labels.push("data #" + (data.labels.length + 1));

//         for (let index = 0; index < data.datasets.length; ++index) {
//           data.datasets[index].data.push(Utils.rand(0, 100));
//         }

//         chart.update();
//       }
//     },
//   },
//   {
//     name: "Remove Data",
//     handler(chart) {
//       chart.data.labels.splice(-1, 1); // remove the label first

//       chart.data.datasets.forEach((dataset) => {
//         dataset.data.pop();
//       });

//       chart.update();
//     },
//   },
// ];

function createChart(fg, fg3, ft) {
  let birdsCanvas = document.getElementById("mycanvas");

  // Chart.defaults.global.defaultFontFamily = "Lato";
  // Chart.defaults.global.defaultFontSize = 18;
  // console.log(player.fg_pct);
  let birdsData = {
    labels: ["Field Goal %", "3-Pointer %", "Free Throw %", "Other"],
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
          "rgba(0, 255, 0, 0.6)",
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

export {createChart};