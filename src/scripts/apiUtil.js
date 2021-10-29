import { playersIDs } from "./players.js";

async function fetchPlayerAvg(playername) {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${playersIDs[playername].id}`
  );

  return await response.json();
}

export { fetchPlayerAvg };
