


async function plotChart(data) {
  const svg = d3.select("#chart")
  const width = svg.node().clientWidth;
  const height = svg.node().clientHeight;
  const ticker = 1500;

  const dateList = Array.from(data.keys())
  const fontSize = 16;
  // space between bars
  const rectProperties = {height: 50, padding: 10}
  const container = svg.append("g")
                          .classed("container", true)
                          .style("transform", "translateY(25px)")


  const widthScale = d3.scaleLinear()
  const axisTop = svg
                  .append('g')
                  .classed('axis', true)
                  .style("transform", "translate(10px, 20px)")
                  .call(d3.axisTop(widthScale))

  const update = (date) =>  {

      const presentData = processEachDateData(data.get(date)[0])
      widthScale.domain([0, d3.max(Object.values(presentData), d => d.value)])
                .range([0, width - fontSize - 50])

      // Displays x-axis at very top
      axisTop                
          .transition()
          .duration(ticker / 1.2)
          .ease(d3.easeLinear)
          .call(d3.axisTop(widthScale))

      // Sorts and doesn't mutate presentData by value
      const sortedRange = [...presentData].sort((a,b) => b.value - a.value)
  

      // Labels each bar at the very end
      container
          .selectAll("text")
          .data(presentData)
          .enter()
          .append("text")

      // Labels each bar at the very end
      container
          .selectAll("text")
          .text(d => d.key + " "+ d.value)
          .transition()
          .delay(500)
          .attr("x", d => widthScale(d.value) + fontSize)
          .attr("y", (d,i) => sortedRange.findIndex(e => e.key === d.key) * (rectProperties.height + rectProperties.padding) + fontSize) 

      container
          .selectAll("rect")
          .data(presentData)
          .enter()
          .append("rect")

      container
          .selectAll("rect")
          .attr("x", 10)
          .transition()
          .delay(500)
          .attr("y", (d,i) => sortedRange.findIndex(e => e.key === d.key) * (rectProperties.height + rectProperties.padding))
          .attr("width", d => d.value <= 0? 0 : widthScale(d.value))
          .attr("height", 20)

  }
  let totalPts = 0;
  for (const date of dateList) {
     update(date)
     await new Promise(done => setTimeout(() => done(), ticker));
  } 
}

function processData(data) { 
  return d3.group(data, d => d.game.date);
}

function processEachDateData(data) {
  //remove status and date
  const k = ['id', 'dreb', 'ft_pct', 'fga', 'fgm', 'blk', 'fg3_pct', 'fg3a', 'fg3m', 'fg_pct', 'fta', 'ftm', 'game', 'min', 'oreb', 'pf', 'player', 'stl', 'team', 'turnover'];
  k.forEach(e => delete data[e]);

  return Object.keys(data)
          .map(key => ({key, value: parseInt(data[key])}))
          // .sort((a,b) => b.value-a.value) 
}

export {plotChart, processData, processEachDateData};