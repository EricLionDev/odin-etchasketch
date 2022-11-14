const checkInput = document.getElementById("header__size");
const resetButton = document.getElementById("header__reset");
const container = document.getElementById("sketch__container");

function generateGrid(size) {
  var gridSize = size * size;
  for (let i = 0; i < gridSize; i++) {
    let div = document.createElement("div");
    div.id = "container__cell";

    div.addEventListener("mouseover", () => {
      div.classList.add("black");
    });
    container.appendChild(div);
  }
  container.style.gridTemplateRows = "repeat(" + size + ", 2fr)";
  container.style.gridTemplateColumns = "repeat(" + size + ", 2fr)";
}
resetButton.addEventListener("click", () => {
  resetSize();
  generateGrid(16);
});

function resetSize() {
  var extraDivs = document.querySelectorAll("#container__cell");
  console.log(extraDivs);
  for (let i = 0; i < extraDivs.length; i++) {
    container.removeChild(extraDivs[i]);
  }
}

function changeSize() {
  var size = prompt("How many pixels would you like each side to be?");
  resetSize();
  generateGrid(size);
}
