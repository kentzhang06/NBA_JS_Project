function displayPlayer(filePath) {
  const image = document.createElement("img");
  image.src = filePath;
  image.style.width = "325px";
  image.style.position = "fixed";
  image.style.bottom = "20%";
  document.querySelector("#player-container").appendChild(image);
}

export { displayPlayer };
