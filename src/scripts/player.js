import { fetchPlayer } from "./apiUtil";
class Player {
  constructor(name) {
    this.name = name;
    this.setupStats();
  }

  async setupStats() {
    const res = await fetchPlayer(this.name);
    let stats = res.data[0];
    console.log(stats);
  }

}

export default Player;