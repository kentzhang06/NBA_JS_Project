// import {chart, chartAlt} from './map.js';
import { locationClicked } from './scripts/location_logic.js';
import {plotChart, processData, processEachDateData} from './scripts/racing_bar_chart.js';
import {getRandomIntInclusive} from './scripts/dynamic_chart.js';

document.addEventListener('DOMContentLoaded', function(){
  const map = document.getElementById("map");
  const state = document.getElementsByClassName("sm_state_CA");
  console.log(state[0]);
  document.body.addEventListener("click", function(e) {
    if (e.target.className === "sm_state_CA") {
      alert("True");
      map.style.display = "none";
    }

  });
  // chart();
  // chartAlt();
  // fetch('https://www.balldontlie.io/api/v1/stats?player_ids[]=235&per_page=100')
  // .then(res => res.json())
  // .then(data=> {
  //   const totalGamesData = data.data;
  //   const groupedData = processData(totalGamesData);
  //   // console.log(groupedData);
  //   // const dateList = Array.from(groupedData.keys()) 
  //   // // console.log(dateList);
  //   // const presentDate = dateList[0]
  //   // // console.log(d3.max(Object.values(presentData), d => parseInt(d.value)));
  //   // console.log(processEachDateData(groupedData.get(presentDate)[0])); 
  //   console.log(groupedData);
  //   plotChart(groupedData);
  // });
  // create initial empty chart

  /////////////////////////////////////////////////////////////////////////
  // var ctx_live = document.getElementById("mycanvas");
  // var myChart = new Chart(ctx_live, {
  //   type: 'bar',
  //   data: {
  //     labels: [],
  //     datasets: [{
  //       data: [],
  //       borderWidth: 1,
  //       borderColor:'#00c0ef',
  //       label: 'liveCount',
  //     }]
  //   },
  //   options: {
  //     responsive: true,
  //     title: {
  //       display: true,
  //       text: "Chart.js - Dynamically Update Chart Via Ajax Requests",
  //     },
  //     legend: {
  //       display: false
  //     },
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero: true,
  //         }
  //       }]
  //     }
  //   }
  // });

  // // this post id drives the example data
  // var postId = 1;
  // let x = 0;
  // myChart.data.labels.push("Post " + postId++);
  // // logic to get new data
  // function updateScales(chart) {
    
  //   var yScale = chart.scales.y;
  //   chart.options.scales = {
  //       newId: {
  //           display: true
  //       },
  //       y: {
  //           display: true,
  //           type: 'logarithmic'
  //       }
  //   };
  //   chart.update();
  //   // need to update the reference

  //   yScale = chart.scales.y;
  // }

  // var getData = function() {
  //   // fetch('https://www.balldontlie.io/api/v1/stats?player_ids[]=235&per_page=100')
  //     .then(response => response.json())
  //     .then(data => {
  //       // process your data to pull out what you plan to use to update the chart
  //       // e.g. new label and a new data point
        
  //       // add new label and data point to chart's underlying data structures
  //       const totalGamesData = data.data;
  //       const groupedData = processData(totalGamesData);
  //       const dateList = Array.from(groupedData.keys()) 
  //       const presentDate = dateList[0];
  //       const temp = processEachDateData(groupedData.get(presentDate)[0]);
  //       console.log(temp[1].value)
  //       // myChart.data.labels.push("Post " + postId++);
  //       myChart.options.plugins.title.text = 'new title';
  //       x += temp[1].value;
  //       myChart.data.datasets[0].data[0] = x;
  //       updateScales(myChart);
        
  //       // re-render the chart
  //       myChart.update();
  //     })
  //     .catch(err => console.error(err));

  // };

  // // get new data every 3 seconds
  // setInterval(getData, 3000);
});