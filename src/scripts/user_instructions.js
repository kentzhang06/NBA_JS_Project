function displayUserInstructions() {
  let instructions = document.getElementById("instructions");
  instructions.innerHTML =
    "<h2> Welcome to NBA Data Visualizer </h2>" +
    "</br>" +
    "<div>1. Click an individual state to zoom in and explore the NBA teams in the area </div>" +
    "</br>" +
    "<div id='tip'> Tip: Hover over a state on the interactive list to find a certain state! </div>" +
    "</br>" +
    "<div> 2. Explore various NBA teams location markers in the state </div>" +
    "</br>" +
    "<div> 3. Click on a location marker </div>" +
    "</br>" +
    "<div> 4. Watch the most popular player of that team's stats grow from rookie seasion until present day! </div>";
}

export { displayUserInstructions };
