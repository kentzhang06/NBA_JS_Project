import {displayYearsClickable} from './dynamic_chart.js';
import { playersIDs } from './players.js';

async function displayHelper(name) {
  const map = document.getElementById("map");
  const btn = document.getElementById("back-btn");
  const list = document.getElementById("simplemaps_list");
  const image = document.getElementById("player-container");
  let btnsContainer = document.getElementById("years-btns");
  const charts = document.getElementById("canvas-container");
  const body = document.getElementsByTagName('body')[0];
  body.style.background =
    `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(${playersIDs[name].img}) no-repeat center center fixed`;
  charts.style.display = "flex";
  btnsContainer.style.display = "grid";
  map.style.display = "none";
  btn.style.display = "block";
  list.style.display = "none";
  image.style.display = "block";


  displayYearsClickable(playersIDs[name].rookieYear, name);
}

function locationClicked(e) {
  switch (e.target.className.baseVal) {
    case "sm_location_0":
      displayHelper("Devin Booker");
      break;
    case "sm_location_1":
      displayHelper("Deaaron Fox");
      break;
    case "sm_location_2":
      displayHelper("Stephen Curry");
      break;
    case "sm_location_3":
      displayHelper("Kobe Bryant");
      break;
    case "sm_location_4":
      displayHelper("Kawhi Leonard");
      break;
    case "sm_location_5":
      displayHelper("Nikola Jokic");
      break;
    case "sm_location_6":
      displayHelper("Markelle Fultz");
      break;
    case "sm_location_7":
      displayHelper("Jimmy Butler");
      break;
    case "sm_location_8":
      displayHelper("Trae Young");
      break;
    case "sm_location_9":
      displayHelper("Zach Lavine");
      break;
    case "sm_location_10":
      displayHelper("Domantas Sabonis");
      break;
    case "sm_location_11":
      displayHelper("Zion Williamson");
      break;
    case "sm_location_12":
      displayHelper("Jayson Tatum");
      break;
    case "sm_location_13":
      displayHelper("Jerami Grant");
      break;
    case "sm_location_14":
      displayHelper("Karl Anthony Towns");
      break;
    case "sm_location_15":
      displayHelper("RJ Barrett");
      break;
    case "sm_location_16":
      displayHelper("Kevin Durant");
      break;
    case "sm_location_17":
      displayHelper("Lamelo Ball");
      break;
    case "sm_location_18":
      displayHelper("Collin Sexton");
      break;
    case "sm_location_19":
      displayHelper("Shai Gilgeous Alexander");
      break;
    case "sm_location_20":
      displayHelper("Damian Lillard");
      break;
    case "sm_location_21":
      displayHelper("Joel Embiid");
      break;
    case "sm_location_22":
      displayHelper("Ja Morant");
      break;
    case "sm_location_23":
      displayHelper("Luka Doncic");
      break;
    case "sm_location_24":
      displayHelper("John Wall");
      break;
    case "sm_location_25":
      displayHelper("Dejounte Murray");
      break;
    case "sm_location_26":
      displayHelper("Donovan Mitchell");
      break;
    case "sm_location_27":
      displayHelper("Giannis Antetokounmpo");
      break;
    case "sm_location_28":
      displayHelper("Bradley Beal");
      break;
    case "sm_location_29":
      displayHelper("Pascal Siakam");
      break;
    default:
      break;
  }
  
}

function backBtnClicked(e) {
  const map = document.getElementById("map");
  const btn = document.getElementById("back-btn");
  const list = document.getElementById("simplemaps_list");
  const image = document.getElementById("player-container");
  const yearsHeader = document.getElementById("years-header");
  const yearsBtns = document.getElementById("years-btns");
  const charts = document.getElementById("canvas-container");
  
  if (e.target.className === "back") {

    map.style.display = "block";
    btn.style.display = "none";
    list.style.display = "block";
    image.style.display = "none";
    
    // remove all child elements in these containers
    charts.innerHTML = '';
    yearsBtns.innerHTML = '';
    yearsHeader.innerHTML = '';
  }

}

export {locationClicked, backBtnClicked};