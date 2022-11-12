function recommendReset() {
  var checkInput = document.getElementById("header__size");
  var resetButton = document.getElementById("header__reset");

  checkInput.addEventListener("keyup", (e) => {
    if (!checkInput.value) {
      console.log(checkInput.value + "Delete");
      resetButton.classList.remove("needs__reset");
    } else {
      console.log(checkInput.value + "else");
      resetButton.classList.add("needs_reset");
    }
  });
}

function generateGrid(size) {
  var gridSize = size;
  var container = document.getElementById("sketch__container");

  for (let i = 0; i < size; i++) {
    let div = document.createElement("div");
    div.className = "container__item";
    container.appendChild(div);
  }
}
