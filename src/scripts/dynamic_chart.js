import {plotChart, processData, processEachDateData} from './racing_bar_chart.js';
// used for example purposes
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateScales(chart) {

  var yScale = chart.scales.y;
  chart.options.scales = {
      y: {
          display: true,
          type: 'logarithmic'
      }
  };
  chart.update();
  // need to update the reference

  yScale = chart.scales.y;
}

function getData(myChart) {
  let x = 0;
  fetch('https://www.balldontlie.io/api/v1/stats?player_ids[]=235&per_page=100')
    .then(response => response.json())
    .then(data => {
      // process your data to pull out what you plan to use to update the chart
      // e.g. new label and a new data point
      
      // add new label and data point to chart's underlying data structures
      const totalGamesData = data.data;
      const groupedData = processData(totalGamesData);
      const dateList = Array.from(groupedData.keys()) 
      const presentDate = dateList[0];
      const temp = processEachDateData(groupedData.get(presentDate)[0]);
      console.log(temp[1].value)
      // myChart.data.labels.push("Post " + postId++);
      myChart.options.plugins.title.text = 'new title';
      x += temp[1].value;
      myChart.data.datasets[0].data[0] = x;
      updateScales(myChart);
      
      // re-render the chart
      myChart.update();
    })
    .catch(err => console.error(err));

}

  ///////////////////////////////////////////////////////////////////////
function dynamicChart() {
  let ctx_live = document.getElementById("mycanvas");
  let myChart = new Chart(ctx_live, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        data: [],
        borderWidth: 1,
        borderColor:'#00c0ef',
        label: 'liveCount',
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Chart.js - Dynamically Update Chart Via Ajax Requests",
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    }
  });

  // this post id drives the example data
  var postId = 1;
  
  myChart.data.labels.push("Points");
  let pts = 0;
  let rebounds = 0;
  let assists = 0;
  const dateList = [];
  myChart.data.labels.push("Assists");
  myChart.data.labels.push("Rebounds");
  // logic to get new data
  let getData = function() {
    fetch('https://www.balldontlie.io/api/v1/stats?player_ids[]=237&per_page=100')
      .then(response => response.json())
      .then(data => {
        // process your data to pull out what you plan to use to update the chart
        // e.g. new label and a new data point
        
        // add new label and data point to chart's underlying data structures
        const totalGamesData = data.data;
        const groupedData = processData(totalGamesData);
        dateList = Array.from(groupedData.keys()) 
        // myChart.data.labels.push("Post " + postId++);
        myChart.options.plugins.title.text = 'new title';
        // for(let date of dateList) {
        //   const temp = processEachDateData(groupedData.get(date)[0]);
        //   console.log(temp)
        //   assists += temp[0].value;
        //   pts += temp[1].value;
        //   rebounds += temp[2].value;
        //   myChart.data.datasets[0].data[0] = pts;
        //   myChart.data.datasets[0].data[1] = assists;
        //   myChart.data.datasets[0].data[2] = rebounds;
        //   updateScales(myChart);
        //   myChart.update();
          // setInterval(() => {
          //   updateScales(myChart);
          //   myChart.update();
          // }, 1000);
          // myChart.update();
        // }
        const temp = processEachDateData(groupedData.get(dateList[0])[0]);
        console.log(temp)
        assists += temp[0].value;
        pts += temp[1].value;
        rebounds += temp[2].value;
        myChart.data.datasets[0].data[0] = pts;
        myChart.data.datasets[0].data[1] = assists;
        myChart.data.datasets[0].data[2] = rebounds;
        updateScales(myChart);
        myChart.update();
      })
      .catch(err => console.error(err));
  }
  console.log(dateList);
  // get new data every 3 seconds
  setInterval(getData, 3000);
}

export {dynamicChart};