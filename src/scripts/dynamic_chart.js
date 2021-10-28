import { playersIDs, processData, processEachDateData } from "./apiUtil.js";
import { Stats } from "./stats.js";
import { fetchPlayerAvg } from "./apiUtil";

async function accessData(playername) {
  const data = await fetchPlayerAvg(playername);
  console.log(data);
}

export { accessData };
