import {geoEqualEarth, geoPath} from "https://cdn.skypack.dev/d3-geo@3";
import {require} from "https://cdn.jsdelivr.net/npm/d3-require@1";
import {selectAll} from "https://cdn.skypack.dev/d3-selection@3";

function chart() {
  let svg = d3.select("svg");
  let path = d3.geoPath();
  
  d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
    if (error) throw error;
  
    svg.append("g")
        .attr("class", "states")
      .selectAll("path")
      .data(topojson.feature(us, us.objects.states).features)
      .enter().append("path")
        .attr("d", path);
  
    svg.append("path")
        .attr("class", "state-borders")
        .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));
  });
}
function fetchHelp() {
  let temp;
  fetch("https://d3js.org/us-10m.v1.json")
    .then(response => {
      temp = response.json();
    });
  // const ex = await temp.json();
  console.log(temp);
  return temp;
}

function chartAlt() {
  let temp;
  console.log( fetch("https://d3js.org/us-10m.v1.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      temp = data;
      console.log(temp);
      return temp;
    })
    .catch(err => console.error(err)) )
  // const ex = await temp.json();


  let path = d3.geoPath();
  let us = fetchHelp();
  // FileAttachment("states-albers-10m.json").json();
  // let topojson = require("topojson-client@3");

  const width = 975;
  const height = 610;

  const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", zoomed);

  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .on("click", reset);

  const g = svg.append("g");

  console.log(us)

  const states = g.append("g")
      .attr("fill", "#444")
      .attr("cursor", "pointer")
      .selectAll("path")
      .data(topojson.feature(us, us.objects.states).features)
      .join("path")
      .on("click", clicked)
      .attr("d", path);
  
  states.append("title")
      .text(d => d.properties.name);

  g.append("path")
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path(topojson.mesh(us, us.objects.states, (a, b) => a !== b)));

  svg.call(zoom);

  function reset() {
    states.transition().style("fill", null);
    svg.transition().duration(750).call(
      zoom.transform,
      d3.zoomIdentity,
      d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
    );
  }

  function clicked(event, d) {
    const [[x0, y0], [x1, y1]] = path.bounds(d);
    event.stopPropagation();
    states.transition().style("fill", null);
    d3.select(this).transition().style("fill", "red");
    svg.transition().duration(750).call(
      zoom.transform,
      d3.zoomIdentity
        .translate(width / 2, height / 2)
        .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
        .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
      d3.pointer(event, svg.node())
    );
  }

  function zoomed(event) {
    const {transform} = event;
    g.attr("transform", transform);
    g.attr("stroke-width", 1 / transform.k);
  }

  return svg.node();
}

export { chart, chartAlt };