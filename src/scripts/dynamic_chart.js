import { fetchPlayerAvg } from "./apiUtil";

async function accessData(playername) {
  const data = await fetchPlayerAvg(playername);
  console.log(data);
}

function displayYearsClickable(rookieYear) {
  let currentYear = new Date().getFullYear();
  let btnsContainer = document.getElementById("years-btns");

  for(let i = rookieYear; i < currentYear + 1; i++) {
    let childButton = document.createElement('div');
    childButton.className = "year-btn";
    childButton.innerHTML = `<div>${i}</div> <ion-icon name="basketball"></ion-icon>`;
    btnsContainer.appendChild(childButton);
  }
  console.log(currentYear);
}

export { accessData, displayYearsClickable };
