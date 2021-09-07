// import {chart, chartAlt} from './map.js';
import {plotChart, processData} from './scripts/racing_bar_chart.js';


document.addEventListener('DOMContentLoaded', function(){
  // chart();
  // chartAlt();
  fetch('https://api.covid19india.org/states_daily.json', {
    method: "GET",
    mode: "no-cors"
  })
  .then(res => res.json())
  .then(data=> {
    const totalCovidDataState = data.states_daily;
    const groupedData = processData(totalCovidDataState); 
    plotChart(groupedData);
  });
});