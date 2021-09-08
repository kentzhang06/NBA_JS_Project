function locationClicked() {
  const locationElement = document.getElementsByClassName("sm_location_2")[0];
  console.log(locationElement);
  const map = document.getElementById("map");

  document.body.addEventListener("click", function(e) {
    if (e.target.className === "sm_location_2") {
      map.style.display = "none";
    }

  });
}

export {locationClicked};