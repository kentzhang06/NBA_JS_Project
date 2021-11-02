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
    img: "https://www.nj.com/resizer/6jTPHFWjkSNbEiO_BNpNujsMMKg=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/VIV6UWBMQBFRNAR56MSVGJDTHA.jpg",
  },
  "Zion Williamson": {
    id: 666969,
    rookieYear: 2019,
    img: "https://cdn.vox-cdn.com/thumbor/FG1HjxIUhiCjv6hxngn10aqwtZc=/0x0:3136x4704/1200x800/filters:focal(1112x1364:1612x1864)/cdn.vox-cdn.com/uploads/chorus_image/image/69169477/1232427714.0.jpg",
  },
  "RJ Barrett": {
    id: 666423,
    rookieYear: 2019,
    img: "https://cdn.newsday.com/polopoly_fs/1.50406278.1635653164!/httpImage/image.jpg_gen/derivatives/landscape_1280/image.jpg",
  },
  "Shai Gilgeous Alexander": {
    id: 175,
    rookieYear: 2018,
    img: "https://i.cbc.ca/1.5428309.1579120918!/fileImage/httpImage/gilgeous-alexander-20191102.jpg",
  },
  "Markelle Fultz": {
    id: 165,
    rookieYear: 2017,
    img: "https://sportshub.cbsistatic.com/i/r/2020/04/01/043a35ce-df68-4708-917f-e654a19d591a/thumbnail/1200x675/9ab4ce8a71510e20b1fc13e64aabe992/markelle-fultz.jpg",
  },
  "Joel Embiid": {
    id: 145,
    rookieYear: 2014,
    img: "https://cdn.nba.com/manage/2020/08/GettyImages-1227898076.jpg",
  },
  "Devin Booker": {
    id: 57,
    rookieYear: 2015,
    img: "https://cdn.nba.com/manage/2021/06/GettyImages-1231030447-scaled.jpg",
  },
  "Damian Lillard": {
    id: 278,
    rookieYear: 2012,
    img: "https://cdn-media.theathletic.com/lgbKSa0OszhL_lgbKSa0OszhL_7VTAlkJTXlmm_original_1440x960.jpg",
  },
  "Deaaron Fox": {
    id: 161,
    rookieYear: 2017,
    img: "https://www.si.com/.image/t_share/MTgwOTE2MDU5MTUzMzc2NjE2/deaaron-fox-kings.jpg",
  },
  "Dejounte Murray": {
    id: 334,
    rookieYear: 2016,
    img: "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_1067,w_1600/http%3A%2F%2Fhoopshabit.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1198342284.jpeg",
  },
  "Pascal Siakam": {
    id: 416,
    rookieYear: 2016,
    img: "https://images.spot.im/v1/production/tmysxn9kqioh6oxuwgc0",
  },
  "Donovan Mitchell": {
    id: 322,
    rookieYear: 2017,
    img: "https://cdn.vox-cdn.com/thumbor/5njO4dmRKoG82Ya35wAEdihy__M=/0x0:3174x2116/1200x800/filters:focal(1393x429:1899x935)/cdn.vox-cdn.com/uploads/chorus_image/image/69750066/usa_today_16154771.0.jpg",
  },
  "Bradley Beal": {
    id: 37,
    rookieYear: 2012,
    img: "https://www.boston.com/wp-content/uploads/2020/07/Wizards_Beal_Basketball_31092.jpg",
  },
};

export {playersIDs};