import { playersIDs, processData, processEachDateData } from "./apiUtil.js";
import { Stats } from "./stats.js";

function dynamicChart(playername) {
  let canvasResult = document.getElementById("mycanvas");
  if (canvasResult) canvasResult.remove();
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "mycanvas");
  document.getElementById("canvas-container").appendChild(canvas);
  let ctx = document.getElementById("mycanvas");

  const myChart = new Chart(ctx, {
    type: "bar",
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          color: "#000000",
          font: {
            size: 70,
            family: "Helvetica Neue",
          },
          text: playername,
        },
      },
    },
    data: {
      labels: [
        "Points",
        "Assists",
        "Rebounds",
        "3-Pointers Made",
        "Blocks",
        "Steals",
        "Turnovers",
        "Freethrows Made",
      ],
      datasets: [
        {
          data: [],
          borderWidth: 1,
          borderColor: "black",
          backgroundColor: "#eb9b08",
          hoverBackgroundColor: "#000000",
          label: "",
        },
      ],
    },
    scales: {
      y: {
        display: true,
        type: "logarithmic",
      },
    },
  });

  const stats = new Stats();
  let pg_num = 1;
  let x = 1;
  let intervalId, interval = 0;

  // logic to get new data
  let getData = function (intervalId) {
    fetch(
      `https://www.balldontlie.io/api/v1/stats?player_ids[]=${playersIDs[playername]}&page=${pg_num}&per_page=100`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(intervalId);
        console.log(data);
        console.log("pg num:" + pg_num);

        // process your data to pull out what you plan to use to update the chart
        const groupedData = processData(data.data);
        const dateList = Array.from(groupedData.keys());

        interval = setInterval(() => {
          const temp = processEachDateData(groupedData.get(dateList[x])[0]);
          stats.updateStats(
            temp[4].value,
            temp[0].value,
            temp[5].value,
            temp[2].value,
            temp[1].value,
            temp[6].value,
            temp[7].value,
            temp[3].value
          );
          myChart.data.datasets[0].data[0] = stats.pts;

          myChart.data.datasets[0].data[1] = stats.assists;
          myChart.data.datasets[0].data[2] = stats.rebounds;
          myChart.data.datasets[0].data[3] = stats.threepts;
          myChart.data.datasets[0].data[4] = stats.blocks;
          myChart.data.datasets[0].data[5] = stats.steals;
          myChart.data.datasets[0].data[6] = stats.turnovers;
          myChart.data.datasets[0].data[7] = stats.freethrows;
          myChart.update();
          x++;

          console.log("x" + x);
          console.log("per page:" + data.meta.per_page);

          if (x === data.meta.per_page + 1) {
            console.log("NEW PAGE +1");
            x = 1;
            pg_num++;
            clearInterval(interval);
            // let newInt = setInterval( () => clearInterval(interval), 100);
            // clearInterval(newInt);
          }

          // increment page number of fetched data
          if (pg_num === data.meta.total_pages + 1) {
            console.log("END");
            console.log(intervalId);
            // clearInterval(interval);
            clearInterval(intervalId);
          }
        }, 100);
      })
      .catch((err) => console.error(err));
  };
  // initial call to grab data/grow chart
  getData();
  // looping interval to grab rest of data/grow chart
  intervalId = setInterval(() => getData(intervalId), 9900);
}

export { dynamicChart };
