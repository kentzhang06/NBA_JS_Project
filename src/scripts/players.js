const playersIDs = {
  "Stephen Curry": {
    id: 115,
    rookieYear: 2009,
    img: "https://s.hdnux.com/photos/01/17/15/02/20762796/14/rawImage.jpg",
  },
  "Trae Young": {
    id: 490,
    rookieYear: 2018,
    img: "https://images.daznservices.com/di/library/sporting_news/19/96/trae-young_utzajfr5nwp1125yleq8g5ho.jpeg?t=1321719708&quality=100",
  },
  "Jayson Tatum": {
    id: 434,
    rookieYear: 2017,
    img: "https://www.boston.com/wp-content/uploads/2021/06/tatum-mad-60ca1e88db53b.jpg",
  },
  "Kevin Durant": {
    id: 140,
    rookieYear: 2007,
    img: "https://images.daznservices.com/di/library/sporting_news/f0/4a/kevin-durant-getty-122520-ftrjpg_128pm7lxd9q8m1ri8q2p7p8i6y.jpg?t=-1642609722&quality=100",
  },
  "Lamelo Ball": {
    id: 3547239,
    rookieYear: 2020,
    img: "https://cdn.nba.com/manage/2020/12/lamelo-ball-smiling-mavs.jpg",
  },
  "Zach Lavine": {
    id: 268,
    rookieYear: 2014,
    img: "https://media.nbcbayarea.com/2021/06/zach-lavine-chicago-bulls-usatsi.jpg?quality=85&strip=all",
  },
  "Collin Sexton": {
    id: 413,
    rookieYear: 2018,
    img: "https://nypost.com/wp-content/uploads/sites/2/2021/07/Collin-Sexton.jpg?quality=80&strip=all",
  },
  "Luka Doncic": {
    id: 132,
    rookieYear: 2018,
    img: "https://e0.365dm.com/21/10/2048x1152/skysports-nba-luka-doncic-dallas-mavericks_5554205.jpg",
  },
  "Nikola Jokic": {
    id: 246,
    rookieYear: 2014,
    img: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fmilehighmaniac.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1039561300.jpeg",
  },
  "Jerami Grant": {
    id: 182,
    rookieYear: 2014,
    img: "https://www.gannett-cdn.com/presto/2021/02/10/PDTF/6951ef22-0015-4fba-98e0-68622b89bf78-02092021_pistons_jh-32.jpg",
  },
  "John Wall": {
    id: 467,
    rookieYear: 2010,
    img: "https://cdn.nba.com/manage/2021/09/john-wall-dribbles.jpg",
  },
  "Domantas Sabonis": {
    id: 406,
    rookieYear: 2016,
    img: "https://cdn.nba.com/manage/2020/02/domantas-sabonis-smiles-reacts.jpg",
  },
  "Kawhi Leonard": {
    id: 274,
    rookieYear: 2011,
    img: "https://images.daznservices.com/di/library/sporting_news/e6/ea/kawhi-leonard-getty-112019-ftrjpg_48uvfykxdugc1hkicboziuueh.jpg?t=-1889813778&quality=100",
  },
  "Kobe Bryant": {
    id: 1043,
    rookieYear: 1996,
    endYear: 2016,
    img: "https://images.daznservices.com/di/library/sporting_news/5/a3/kobe-bryant-getty-022720-ftrjpg_133gft6g4mxsu1jg75nkkmcln6.jpg?t=-328172561&quality=100",
  },
  "Ja Morant": {
    id: 666786,
    rookieYear: 2019,
    img: "https://www.outkick.com/wp-content/uploads/ja-morant-113019-getty-ftr_ieffaqqncoqc1envz9n9kht8h.jpeg",
  },
  "Jimmy Butler": {
    id: 79,
    rookieYear: 2011,
    img: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2F8points9seconds.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2020%2F03%2F1211815987.jpeg",
  },
  "Giannis Antetokounmpo": {
    id: 15,
    rookieYear: 2013,
    img: "https://thespun.com/wp-content/uploads/2019/04/GettyImages-949288546.jpg",
  },
  "Karl Anthony Towns": {
    id: 447,
    rookieYear: 2015,
    img: "https://images.daznservices.com/di/library/sporting_news/2f/9b/karl-anthony-towns-getty-121218-ftrjpg_1bwgwkri0bcb31s0vuk5tyzt4z.jpg?t=-1502360201&quality=100",
  },
  "Zion Williamson": {
    id: 666969,
    rookieYear: 2019,
    img: "https://www.nba.com/pelicans/sites/pelicans/files/cp-zion-williamson-1920-v2.jpg",
  },
  "RJ Barrett": {
    id: 666423,
    rookieYear: 2019,
    img: "https://staticg.sportskeeda.com/editor/2021/10/66dbd-16356601744912-1920.jpg",
  },
  "Shai Gilgeous Alexander": {
    id: 175,
    rookieYear: 2018,
    img: "https://images.daznservices.com/di/library/NBA_Global_CMS_image_storage/16/18/gilgeous-alexander-ftrjpg_d6s5mfrukm3x1e0n6i6iqgucm.jpg?t=-1564391265&quality=80",
  },
  "Markelle Fultz": {
    id: 165,
    rookieYear: 2017,
    img: "https://images.daznservices.com/di/library/NBA_Global_CMS_image_storage/b9/b8/fultz_1dfnnvpx5v37g1clywaepyoha5.jpg?t=2087009518&w=1920&h=1080",
  },
  "Joel Embiid": {
    id: 145,
    rookieYear: 2014,
    img: "https://cdn.nba.com/manage/2020/08/GettyImages-1227898076.jpg",
  },
  "Devin Booker": {
    id: 57,
    rookieYear: 2015,
    img: "https://cdn.nba.com/manage/2021/05/bookerarsenal1920.jpg",
  },
  "Damian Lillard": {
    id: 278,
    rookieYear: 2012,
    img: "https://images.alphacoders.com/927/thumb-1920-927780.jpg",
  },
  "Deaaron Fox": {
    id: 161,
    rookieYear: 2017,
    img: "https://images.daznservices.com/di/library/NBA_Global_CMS_image_storage/4/5c/deaaron-fox_fw7d4vfxs3pb1op03m887gt3z.png?t=1985087160&quality=80",
  },
  "Dejounte Murray": {
    id: 334,
    rookieYear: 2016,
    img: "https://d19fv2ziequ6ig.cloudfront.net/images/2020/8/3/Dejounte_Murray.jpg?width=1920&height=1080&mode=crop&quality=80&format=jpg",
  },
  "Pascal Siakam": {
    id: 416,
    rookieYear: 2016,
    img: "https://images.daznservices.com/di/library/Sporting_News_CA_CMS_image_storage/b2/26/pascal-siakam-10052018-getty-ftr_131n8s3r621kl1jxut5ube19fw.jpg?t=237039095&quality=100",
  },
  "Donovan Mitchell": {
    id: 322,
    rookieYear: 2017,
    img: "https://wallpaperaccess.com/full/1383123.jpg",
  },
  "Bradley Beal": {
    id: 37,
    rookieYear: 2012,
    img: "https://i2.wp.com/paceandspacehoops.com/wp-content/uploads/2019/01/bradley-beal2.jpg?fit=1920%2C1080&ssl=1",
  },
};

export {playersIDs};