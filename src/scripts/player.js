import { fetchPlayer } from "./apiUtil";

class Player {
  constructor(name) {
    this.name = name;
    this.setupStats();
    this.ast; 
  }

  async setupStats() {
    const res = await fetchPlayer(this.name);
    let stats = res.data[0];
    this.ast = stats.ast;
    this.blk = stats.blk;
    this.reb = stats.reb;
    this.min = stats.min;
    this.pts = stats.pts;
    this.stl = stats.stl;
    this.turnover = stats.turnover;

    this.fta = stats.fta;
    this.ftm = stats.ftm;

    this.fg3a = stats.fg3a;
    this.fg3m = stats.fg3m;

    this.fg_pct = stats.fg_pct;
    this.fg3_pct = stats.fg3_pct;
    this.ft_pct = stats.ft_pct;

    this.games_played = stats.games_played;

  }

}

export default Player;