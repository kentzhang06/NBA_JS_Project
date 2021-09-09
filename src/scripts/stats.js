class Stats {
  constructor() {
    this.pts = 0;
    this.rebounds = 0;
    this.assists = 0;
    this.threepts = 0;
    this.blocks = 0;
    this.steals = 0;
    this.turnovers = 0;
    this.freethrows = 0;
  }

  updateStats(pts, reb, assists, threepts, blks, steals, to, ft) {
    if (!pts) pts = 0;
    if (!reb) reb = 0;
    if (!assists) assists = 0;
    if (!threepts) threepts = 0;
    if (!blks) blks = 0;
    if (!steals) steals = 0;
    if (!to) to = 0;
    if (!ft) ft = 0;
    this.pts += pts;
    this.rebounds += reb;
    this.assists += assists;
    this.threepts += threepts;
    this.blocks += blks;
    this.steals += steals;
    this.turnovers += to;
    this.freethrows += ft;
  }

  resetStats(){
    this.pts = 0;
    this.rebounds = 0;
    this.assists = 0;
    this.threepts = 0;
    this.blocks = 0;
    this.steals = 0;
    this.turnovers = 0;
    this.freethrows = 0;
  }
}

export {Stats};