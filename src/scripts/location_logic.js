import {dynamicChart} from './dynamic_chart.js';
import {displayPlayer} from './images.js';

function locationClicked(e, map, graph, btn, list, image) {
  let myChart;
  if (e.target.className.baseVal === "sm_location_0" || e.target.className.baseVal === "sm_Location_0") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    image.style.display = "block";
    myChart = dynamicChart('Devin Booker');
  }else if (e.target.className.baseVal === "sm_location_1" || e.target.className.baseVal === "sm_Location_1") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Deaaron Fox');
  }
  else if (e.target.className.baseVal === "sm_location_2" || e.target.className.baseVal === "sm_Location_2") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Stephen Curry');
  }else if (e.target.className.baseVal === "sm_location_3" || e.target.className.baseVal === "sm_Location_3") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Kobe Bryant');
  }else if (e.target.className.baseVal === "sm_location_4" || e.target.className.baseVal === "sm_Location_4") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Kawhi Leonard');
  }else if (e.target.className.baseVal === "sm_location_5" || e.target.className.baseVal === "sm_Location_5") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Nikola Jokic');
  }else if (e.target.className.baseVal === "sm_location_6" || e.target.className.baseVal === "sm_Location_6") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Markelle Fultz');
  }else if (e.target.className.baseVal === "sm_location_7" || e.target.className.baseVal === "sm_Location_7") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Jimmy Butler');
  }else if (e.target.className.baseVal === "sm_location_8" || e.target.className.baseVal === "sm_Location_8") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Trae Young');
  }else if (e.target.className.baseVal === "sm_location_9" || e.target.className.baseVal === "sm_Location_9") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Zach Lavine');
  }else if (e.target.className.baseVal === "sm_location_10" || e.target.className.baseVal === "sm_Location_10") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Domantas Sabonis');
  }else if (e.target.className.baseVal === "sm_location_11" || e.target.className.baseVal === "sm_Location_11") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Zion Williamson');
  }else if (e.target.className.baseVal === "sm_location_12" || e.target.className.baseVal === "sm_Location_12") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Jayson Tatum');
  }else if (e.target.className.baseVal === "sm_location_13" || e.target.className.baseVal === "sm_Location_13") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Jerami Grant');
  }else if (e.target.className.baseVal === "sm_location_14" || e.target.className.baseVal === "sm_Location_14") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Karl Anthony Towns');
  }else if (e.target.className.baseVal === "sm_location_15" || e.target.className.baseVal === "sm_Location_15") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('RJ Barrett');
  }else if (e.target.className.baseVal === "sm_location_16" || e.target.className.baseVal === "sm_Location_16") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Kevin Durant');
  }else if (e.target.className.baseVal === "sm_location_17" || e.target.className.baseVal === "sm_Location_17") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Lamelo Ball');
  }else if (e.target.className.baseVal === "sm_location_18" || e.target.className.baseVal === "sm_Location_18") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Collin Sexton');
  }else if (e.target.className.baseVal === "sm_location_19" || e.target.className.baseVal === "sm_Location_19") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Shai Gilgeous Alexander');
  }else if (e.target.className.baseVal === "sm_location_20" || e.target.className.baseVal === "sm_Location_20") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Damian Lillard');
  }else if (e.target.className.baseVal === "sm_location_21" || e.target.className.baseVal === "sm_Location_21") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Joel Embiid');
  }else if (e.target.className.baseVal === "sm_location_22" || e.target.className.baseVal === "sm_Location_22") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Ja Morant');
  }else if (e.target.className.baseVal === "sm_location_23" || e.target.className.baseVal === "sm_Location_23") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Luka Doncic');
  }else if (e.target.className.baseVal === "sm_location_24" || e.target.className.baseVal === "sm_Location_24") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('John Wall');
  }else if (e.target.className.baseVal === "sm_location_25" || e.target.className.baseVal === "sm_Location_25") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Dejounte Murray');
  }else if (e.target.className.baseVal === "sm_location_26" || e.target.className.baseVal === "sm_Location_26") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Donovan Mitchell');
  }else if (e.target.className.baseVal === "sm_location_27" || e.target.className.baseVal === "sm_Location_27") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Giannis Antetokounmpo');
  }else if (e.target.className.baseVal === "sm_location_28" || e.target.className.baseVal === "sm_Location_28") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Bradley Beal');
  }else if (e.target.className.baseVal === "sm_location_29" || e.target.className.baseVal === "sm_Location_29") {
    map.style.display = "none";
    graph.style.display = "block";
    btn.style.display = "block";
    list.style.display = "none";
    dynamicChart('Pascal Siakam');
  }
  return myChart;
}

function backBtnClicked(e, map, graph, btn, list, image, myChart) {

  
  if (e.target.className === "back") {
    graph.style.display = "none";
    map.style.display = "block";
    btn.style.display = "none";
    list.style.display = "block";
    image.style.display = "none";
    // myChart.destroy();
  }

}

export {locationClicked, backBtnClicked};