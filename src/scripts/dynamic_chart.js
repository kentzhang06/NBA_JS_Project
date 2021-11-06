import { createPieChart } from "./percentageChart.js";
import { createBarChart } from "./barChart.js";
import { fetchPlayer } from "./apiUtil";
import { playersIDs } from "./players.js";

function displayPlayerHeader(name) {
  let container = document.getElementById("player-container");
  let child = document.createElement("h1");
  child.className = "player-header";
  child.innerHTML = name;
  container.appendChild(child);
}

function displayYearsHeader() {
  let container = document.getElementById("years-header");
  container.style.display = "flex";
  let child = document.createElement("h1");
  child.className = "seasons-header";
  child.innerHTML = "Seasons Played";
  container.appendChild(child);
}

async function displayYearsClickable(rookieYear, name) {
  let currentYear = !playersIDs[name].endYear
    ? new Date().getFullYear()
    : playersIDs[name].endYear;
    
  let btnsContainer = document.getElementById("years-btns");

  let res = await fetchPlayer(name, currentYear-1);
  let stats = res.data[0];

  let pieChart = createPieChart(stats.fg_pct, stats.fg3_pct, stats.ft_pct);
  let barChart = createBarChart(
    stats.pts,
    stats.ast,
    stats.reb,
    stats.stl,
    stats.blk,
    stats.turnover
  );

  displayYearsHeader();
  
  displayPlayerHeader(name);
  for (let i = rookieYear; i < currentYear; i++) {
    let childButton = document.createElement("div");
    childButton.className = "year-btn";
    childButton.innerHTML = `<div>${i}</div> <ion-icon name="basketball"></ion-icon>`;
    childButton.addEventListener("click", async function () {
      res = await fetchPlayer(name, i);
      stats = res.data[0];
      pieChart.destroy();
      barChart.destroy();
      pieChart = createPieChart(stats.fg_pct, stats.fg3_pct, stats.ft_pct);
      barChart = createBarChart(
        stats.pts,
        stats.ast,
        stats.reb,
        stats.stl,
        stats.blk,
        stats.turnover,
        stats.games_played
      );
    });
    btnsContainer.appendChild(childButton);
  }
}

export { displayYearsClickable };
