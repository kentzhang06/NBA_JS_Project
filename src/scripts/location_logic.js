import {dynamicChart} from './dynamic_chart.js';
import {displayPlayer} from './images.js';

function displayHelper(map, graph, btn, list, image) {
  map.style.display = "none";
  graph.style.display = "block";
  btn.style.display = "block";
  list.style.display = "none";
  image.style.display = "block";
}

function locationClicked(e, map, graph, btn, list, image) {
  if (e.target.className.baseVal === "sm_location_0") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Devin Booker');
  }else if (e.target.className.baseVal === "sm_location_1") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Deaaron Fox');
  }
  else if (e.target.className.baseVal === "sm_location_2" || e.target.className.baseVal === "sm_Location_2") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Stephen Curry');
  }else if (e.target.className.baseVal === "sm_location_3" || e.target.className.baseVal === "sm_Location_3") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Kobe Bryant');
  }else if (e.target.className.baseVal === "sm_location_4" || e.target.className.baseVal === "sm_Location_4") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Kawhi Leonard');
  }else if (e.target.className.baseVal === "sm_location_5" || e.target.className.baseVal === "sm_Location_5") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Nikola Jokic');
  }else if (e.target.className.baseVal === "sm_location_6" || e.target.className.baseVal === "sm_Location_6") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Markelle Fultz');
  }else if (e.target.className.baseVal === "sm_location_7" || e.target.className.baseVal === "sm_Location_7") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Jimmy Butler');
  }else if (e.target.className.baseVal === "sm_location_8" || e.target.className.baseVal === "sm_Location_8") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Trae Young');
  }else if (e.target.className.baseVal === "sm_location_9" || e.target.className.baseVal === "sm_Location_9") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Zach Lavine');
  }else if (e.target.className.baseVal === "sm_location_10" || e.target.className.baseVal === "sm_Location_10") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Domantas Sabonis');
  }else if (e.target.className.baseVal === "sm_location_11" || e.target.className.baseVal === "sm_Location_11") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Zion Williamson');
  }else if (e.target.className.baseVal === "sm_location_12" || e.target.className.baseVal === "sm_Location_12") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Jayson Tatum');
  }else if (e.target.className.baseVal === "sm_location_13" || e.target.className.baseVal === "sm_Location_13") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Jerami Grant');
  }else if (e.target.className.baseVal === "sm_location_14" || e.target.className.baseVal === "sm_Location_14") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Karl Anthony Towns');
  }else if (e.target.className.baseVal === "sm_location_15" || e.target.className.baseVal === "sm_Location_15") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('RJ Barrett');
  }else if (e.target.className.baseVal === "sm_location_16" || e.target.className.baseVal === "sm_Location_16") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Kevin Durant');
  }else if (e.target.className.baseVal === "sm_location_17" || e.target.className.baseVal === "sm_Location_17") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Lamelo Ball');
  }else if (e.target.className.baseVal === "sm_location_18" || e.target.className.baseVal === "sm_Location_18") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Collin Sexton');
  }else if (e.target.className.baseVal === "sm_location_19" || e.target.className.baseVal === "sm_Location_19") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Shai Gilgeous Alexander');
  }else if (e.target.className.baseVal === "sm_location_20" || e.target.className.baseVal === "sm_Location_20") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Damian Lillard');
  }else if (e.target.className.baseVal === "sm_location_21" || e.target.className.baseVal === "sm_Location_21") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Joel Embiid');
  }else if (e.target.className.baseVal === "sm_location_22" || e.target.className.baseVal === "sm_Location_22") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Ja Morant');
  }else if (e.target.className.baseVal === "sm_location_23" || e.target.className.baseVal === "sm_Location_23") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Luka Doncic');
  }else if (e.target.className.baseVal === "sm_location_24" || e.target.className.baseVal === "sm_Location_24") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('John Wall');
  }else if (e.target.className.baseVal === "sm_location_25" || e.target.className.baseVal === "sm_Location_25") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Dejounte Murray');
  }else if (e.target.className.baseVal === "sm_location_26" || e.target.className.baseVal === "sm_Location_26") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Donovan Mitchell');
  }else if (e.target.className.baseVal === "sm_location_27" || e.target.className.baseVal === "sm_Location_27") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Giannis Antetokounmpo');
  }else if (e.target.className.baseVal === "sm_location_28" || e.target.className.baseVal === "sm_Location_28") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Bradley Beal');
  }else if (e.target.className.baseVal === "sm_location_29" || e.target.className.baseVal === "sm_Location_29") {
    displayHelper(map, graph, btn, list, image);
    dynamicChart('Pascal Siakam');
  }
  
}

function backBtnClicked(e, map, graph, btn, list, image) {

  
  if (e.target.className === "back") {
    graph.style.display = "none";
    map.style.display = "block";
    btn.style.display = "none";
    list.style.display = "block";
    image.style.display = "none";
    document.getElementById("mycanvas").remove();
    
  }

}

export {locationClicked, backBtnClicked};