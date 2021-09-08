// import {chart, chartAlt} from './map.js';
import { locationClicked } from './scripts/location_logic.js';
import {plotChart, processData, processEachDateData} from './scripts/racing_bar_chart.js';
import {dynamicChart} from './scripts/dynamic_chart.js';

document.addEventListener('DOMContentLoaded', function(){
  const map = document.getElementById("map");
  // const ca = document.getElementsByClassName("sm_state_CA");

  // console.log(ca);
  // console.log(ca.length);
  // console.log(states);
  document.body.addEventListener("click", function(e) {
    
    if (e.target.className.baseVal === "sm_location_2" || e.target.className.baseVal === "sm_Location_2") {
      alert("True");
      map.style.display = "none";
    }
  });


  // dynamicChart();
 
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