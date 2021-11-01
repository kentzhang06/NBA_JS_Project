import { playersIDs } from "./players.js";

async function fetchPlayer(playername, season) {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/season_averages?season=${season}&player_ids[]=${playersIDs[playername].id}`
  );

  return await response.json();
}

// async function fetchPlayerAvg(playername) {
//   const data = await fetchPlayerHelper(playername);
//   console.log(data);
// }

export { fetchPlayer };
