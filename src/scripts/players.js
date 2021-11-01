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
    img: "https://cdn-wp.thesportsrush.com/2021/10/deaa6073-untitled-design-45.jpg",
  },
  "Lamelo Ball": {
    id: 3547239,
    rookieYear: 2020,
    img: "https://cdn.nba.com/manage/2021/10/lamelo-driving-iso-1568x882.jpg",
  },
  "Zach Lavine": {
    id: 268,
    rookieYear: 2014,
    img: "https://cdn.vox-cdn.com/thumbor/cUMHzf_hGYVMREBsWveDJyINq5s=/0x0:1600x900/1200x800/filters:focal(654x152:910x408)/cdn.vox-cdn.com/uploads/chorus_image/image/69159570/Zach8.0.jpg",
  },
  "Collin Sexton": {
    id: 413,
    rookieYear: 2018,
    img: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f2c3e25222b461bd24955ad%2F0x0.jpg",
  },
  "Luka Doncic": {
    id: 132,
    rookieYear: 2018,
    img: "https://sportshub.cbsistatic.com/i/r/2020/12/21/20007c35-440a-435b-b914-bd086c25b97b/thumbnail/1200x675/c080185ca05b94bea9e7cfb38a17cbc6/luka-doncic.jpg",
  },
  "Nikola Jokic": {
    id: 246,
    rookieYear: 2014,
    img: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fmilehighmaniac.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1039561300.jpeg",
  },
  "Jerami Grant": {
    id: 182,
    rookieYear: 2014,
    img: "https://lastwordonsports.com/basketball/wp-content/uploads/sites/9/2021/03/Screen-Shot-2021-03-22-at-4.41.12-PM.jpg",
  },
  "John Wall": {
    id: 467,
    rookieYear: 2010,
    img: "https://cdn.nba.com/manage/2021/09/john-wall-looks-1568x882.jpg",
  },
  "Domantas Sabonis": {
    id: 406,
    rookieYear: 2016,
    img: "https://cdn.vox-cdn.com/thumbor/ZNdTDsdX0lBHAiH6GoWXN1K1FA4=/0x0:3149x2100/1200x800/filters:focal(934x385:1436x887)/cdn.vox-cdn.com/uploads/chorus_image/image/66957109/1192098662.jpg.0.jpg",
  },
  "Kawhi Leonard": {
    id: 274,
    rookieYear: 2011,
    img: "https://sportshub.cbsistatic.com/i/r/2021/09/18/86bfbcf5-ae82-4415-84ea-dfd506738ae8/thumbnail/1200x675/4a610c4f49c18c4a89e8c733df39ac09/kawhi-leonard-clippers.jpg",
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
    img: "https://www.sportsnet.ca/wp-content/uploads/2020/12/jimmy-butler-heat-1.jpg",
  },
  "Giannis Antetokounmpo": {
    id: 15,
    rookieYear: 2013,
    img: "https://cdn.vox-cdn.com/thumbor/CHt3IJDbOa3RyPj904qZBVUDdu0=/0x0:2695x1781/1200x800/filters:focal(1079x450:1509x880)/cdn.vox-cdn.com/uploads/chorus_image/image/69578097/1328249149.0.jpg",
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