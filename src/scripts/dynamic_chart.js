import {playersIDs, processData, processEachDateData} from './apiUtil.js';
import {Stats} from './stats.js';

// function updateScales(chart) {

//   var yScale = chart.scales.y;
//   chart.options.scales = {
//       y: {
//           display: true,
//           type: 'logarithmic'
//       }
//   };
//   chart.update();
//   // need to update the reference

//   yScale = chart.scales.y;
// }


function dynamicChart(playername) {
  let ctx_live = document.getElementById("mycanvas");
  let myChart = new Chart(ctx_live, {
    type: 'bar',
    defaults: {
      color: '#000000'
    },
    data: {
      labels: [],
      datasets: [{
        data: [],
        borderWidth: 1,
        borderColor:'#00c0ef',
        backgroundColor: '#eb9b08',
        hoverBackgroundColor: '#000000',
        label: playername,
      }]
    },
    scales: {
      y: {
        display: true,
        type: 'logarithmic'
      }
    }
  });
  myChart.data.labels.push("Points");
  myChart.data.labels.push("Assists");
  myChart.data.labels.push("Rebounds");
  myChart.data.labels.push("3-Pointers Made");
  myChart.data.labels.push("Blocks");
  myChart.data.labels.push("Steals");
  myChart.data.labels.push("Turnovers");
  myChart.data.labels.push("Freethrows Made");
  const stats = new Stats();
  let pg_num = 1;
  let x = 0;
  // logic to get new data
  console.log(playersIDs[playername]);
  let getData = function() {
    fetch(`https://www.balldontlie.io/api/v1/stats?player_ids[]=${playersIDs[playername]}&page=${pg_num}`)
      .then(response => response.json())
      .then(data => {
        // process your data to pull out what you plan to use to update the chart
        // e.g. new label and a new data point
        
        // add new label and data point to chart's underlying data structures
        const groupedData = processData(data.data);
        
        const dateList = Array.from(groupedData.keys());
        
        const temp = processEachDateData(groupedData.get(dateList[x++])[0]);
        console.log(data);
        if (x > data.meta.per_page - 1){
          x = 0;
          pg_num++;
        }
        if (pg_num > data.meta.total_pages) {
          x = 0;
          pg_num = 1;
          stats.resetStats();
        }
        
        console.log(`x: ${x}`);
        console.log(`pg_num: ${pg_num}`);
        stats.updateStats(temp[4].value, temp[0].value, temp[5].value, temp[2].value, temp[1].value, temp[6].value, temp[7].value, temp[3].value);
        console.log(stats);
        myChart.data.datasets[0].data[0] = stats.pts;
        console.log(`assists: ${temp[4].value}`);
        console.log(`pts: ${stats.pts}`);
        myChart.data.datasets[0].data[1] = stats.assists;
        myChart.data.datasets[0].data[2] = stats.rebounds;
        myChart.data.datasets[0].data[3] = stats.threepts;
        myChart.data.datasets[0].data[4] = stats.blocks;
        myChart.data.datasets[0].data[5] = stats.steals;
        myChart.data.datasets[0].data[6] = stats.turnovers;
        myChart.data.datasets[0].data[7] = stats.freethrows;
        // updateScales(myChart);
        myChart.update();
      })
      .catch(err => console.error(err));
  }

  // get new data every 1 seconds
  setInterval(getData, 1000);
}

export {dynamicChart};