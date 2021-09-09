// import {chart, chartAlt} from './map.js';
import { locationClicked, backBtnClicked } from './scripts/location_logic.js';
import {displayPlayer} from './scripts/images.js';
// import {plotChart, processData, processEachDateData} from './scripts/apiUtil.js';
// import {dynamicChart} from './scripts/dynamic_chart.js';

document.addEventListener('DOMContentLoaded', function(){
  const map = document.getElementById("map");
  const btn = document.getElementById("back-btn");
  const graph = document.getElementById("mycanvas");
  const list = document.getElementById("simplemaps_list");
  const image = document.getElementById("player-container");
  displayPlayer('./images/devin-booker.jpg');

  document.body.addEventListener("click", function(e) {
    locationClicked(e, map, graph, btn, list, image);
    // console.log(myChart);
    // myChart.destroy();
    backBtnClicked(e, map, graph, btn, list, image);

  });

 
});

