const playersIDs = {
  'Stephen Curry': 115,
  'Trae Young': 490,
  'Jayson Tatum': 434,
  'Kevin Durant': 140,
  'Lamelo Ball': 3547239,
  'Zach Lavine': 268,
  'Collin Sexton': 413,
  'Luka Doncic': 132,
  'Nikola Jokic': 246,
  'Jerami Grant': 182,
  'John Wall': 467,
  'Domantas Sabonis': 406,
  'Kawhi Leonard': 274,
  'Kobe Bryant': 1043,
  'Ja Morant': 666786,
  'Jimmy Butler': 79,
  'Giannis Antetokounmpo': 15,
  'Karl Anthony Towns': 447,
  'Zion Williamson': 666969,
  'RJ Barrett': 666423,
  'Shai Gilgeous Alexander': 175,
  'Markelle Fultz': 165,
  'Joel Embiid': 145,
  'Devin Booker': 57,
  'Damian Lillard': 278,
  'Deaaron Fox': 161,
  'Dejounte Murray': 334,
  'Pascal Siakam': 416,
  'Donovan Mitchell': 322,
  'Bradley Beal': 37
};

function processData(data) { 
  return d3.group(data, d => d.game.date);
}

function processEachDateData(data) {
  //remove these stats
  const k = ['id', 'dreb', 'ft_pct', 'fga', 'fgm', 'fg3_pct', 'fg3a', 'fg_pct', 'fta', 'game', 'min', 'oreb', 'pf', 'player', 'team'];
  k.forEach(e => delete data[e]);

  return Object.keys(data)
          .map(key => ({key, value: parseInt(data[key])}))
}

export {processData, processEachDateData, playersIDs};