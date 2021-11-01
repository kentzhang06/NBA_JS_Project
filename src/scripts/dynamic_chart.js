import { createPieChart } from "./percentageChart.js";
import { createBarChart } from "./barChart.js";
import { fetchPlayer } from "./apiUtil";

function displayYearsHeader() {
  let container = document.getElementById("years-header");
  container.style.display = "block";
  let child = document.createElement("h1");
  child.className = "seasons-header";
  child.innerHTML = "Seasons Played";
  container.appendChild(child);
}

async function displayYearsClickable(rookieYear, name) {
  let currentYear = new Date().getFullYear();
  let btnsContainer = document.getElementById("years-btns");

  let res = await fetchPlayer(name, currentYear);
  let stats = res.data[0];

  createPieChart(stats.fg_pct, stats.fg3_pct, stats.ft_pct);
  createBarChart(
    stats.pts,
    stats.ast,
    stats.reb,
    stats.stl,
    stats.blk,
    stats.turnover,
    stats.games_played
  );

  displayYearsHeader();
  for (let i = rookieYear; i < currentYear+1; i++) {
    let childButton = document.createElement("div");
    childButton.className = "year-btn";
    childButton.innerHTML = `<div>${i}</div> <ion-icon name="basketball"></ion-icon>`;
    childButton.addEventListener("click", async function () {
      res = await fetchPlayer(name, i);
      console.log(res);
      stats = res.data[0];
      // pieChart.destroy();
      // barChart.destroy();
      createPieChart(stats.fg_pct, stats.fg3_pct, stats.ft_pct);
      createBarChart(
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
  console.log(currentYear);
}

export { displayYearsClickable };
