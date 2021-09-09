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

  let canvasResult = document.getElementById("mycanvas");
  if (canvasResult) canvasResult.remove();
  let canvas = document.createElement('canvas');
  canvas.setAttribute('id','mycanvas');
  // // canvas.setAttribute('width','300');
  // // canvas.setAttribute('height','100');
  document.getElementById("canvas-container").appendChild(canvas);
  let ctx = document.getElementById("mycanvas");

  const myChart = new Chart(ctx, {
    type: 'bar',
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            font: {
              color: "#000000",
              size: 20
            }
          }
        },
        title: {
          display: true,
          font: {
            color: "black",
            size: 50
          },
          text: playername
        },
        scales: {
          y: {
            beginAtZero: true
          },
          ticks: {
            size: 20
          }
        }
      }
    },
    data: {
      labels: ["Points", "Assists", "Rebounds", "3-Pointers Made", "Blocks", "Steals", "Turnovers", "Freethrows Made"],
      datasets: [{
        data: [],
        borderWidth: 1,
        color: '#000000',
        borderColor:'#00c0ef',
        backgroundColor: '#eb9b08',
        hoverBackgroundColor: '#000000',
        label: '',
      },
    ]
    },
    scales: {
      y: {
        display: true,
        type: 'logarithmic'
      }
    }
  });
  
  const stats = new Stats();
  let pg_num = 1;
  let x = 0;

  // logic to get new data
  let getData = function() {
    fetch(`https://www.balldontlie.io/api/v1/stats?player_ids[]=${playersIDs[playername]}&page=${pg_num}&per_page=100`)
      .then(response => response.json())
      .then(data => {
        // process your data to pull out what you plan to use to update the chart
        
        const groupedData = processData(data.data);
        const dateList = Array.from(groupedData.keys());

        let interval = setInterval(() => {
          const temp = processEachDateData(groupedData.get(dateList[x])[0]);
          stats.updateStats(temp[4].value, temp[0].value, temp[5].value, temp[2].value, temp[1].value, temp[6].value, temp[7].value, temp[3].value);
          myChart.data.datasets[0].data[0] = stats.pts;
  
          myChart.data.datasets[0].data[1] = stats.assists;
          myChart.data.datasets[0].data[2] = stats.rebounds;
          myChart.data.datasets[0].data[3] = stats.threepts;
          myChart.data.datasets[0].data[4] = stats.blocks;
          myChart.data.datasets[0].data[5] = stats.steals;
          myChart.data.datasets[0].data[6] = stats.turnovers;
          myChart.data.datasets[0].data[7] = stats.freethrows;
          myChart.update()
          x++;

          if (x > data.meta.per_page - 1){
            x = 0;
            pg_num++;
            clearInterval(interval);
          }
        }, 1000);
    
        if (pg_num > data.meta.total_pages) {
          x = 0;
          pg_num = 1;
          stats.resetStats();
        }

      })
      .catch(err => console.error(err));
  }
  getData();
  setInterval(getData, 100000);
  
}

export {dynamicChart};