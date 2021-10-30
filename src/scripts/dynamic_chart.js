function displayYearsHeader() {
  let container = document.getElementById("years-header");
  container.style.display = "block";
  let child = document.createElement('h1');
  child.className = "seasons-header";
  child.innerHTML = "Seasons Played";
  container.appendChild(child);
}

function displayYearsClickable(rookieYear) {
  let currentYear = new Date().getFullYear();
  let btnsContainer = document.getElementById("years-btns");
  btnsContainer.style.display = "grid";

  displayYearsHeader();
  for(let i = rookieYear; i < currentYear + 1; i++) {
    let childButton = document.createElement('div');
    childButton.className = "year-btn";
    childButton.innerHTML = `<div>${i}</div> <ion-icon name="basketball"></ion-icon>`;
    btnsContainer.appendChild(childButton);
  }
  console.log(currentYear);
}

export { displayYearsClickable };
