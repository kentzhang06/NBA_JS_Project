function displayUserInstructions() {
  let instructions = document.getElementById("instructions");
  instructions.innerHTML =
    "Welcome to NBA Data Visualizer" +
    "</br>" +
    "1. Click an individual state to zoom in and explore the NBA teams in the area " +
    "</br>" +
    "Tip: Hover over a state on the interactive list to find a certain state!" +
    "</br>" +
    "2. Explore various NBA teams location markers in the state" +
    "</br>" +
    "3. Click on a location marker" + 
    "</br>" +
    "4. Watch the most popular player of that team's stats grow from rookie seasion until present day";
}

export { displayUserInstructions };
