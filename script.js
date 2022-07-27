let container = document.getElementById("container");
const slider = document.getElementById("slider");
const outputSlider = document.getElementById("showGridValue");

function updateSizeValue(value) {
  outputSlider.innerHTML = `${value} x ${value}`;
}

slider.onmousemove = (e) => updateSizeValue(e.target.value);

function createGrid(rows, cols) {
  for (i = 0; i < rows * cols; i++) {
    let cells = document.createElement("div");
    cells.classList.add(`cell`);
    cells.innerText = "X";
    container.appendChild(cells);
  }
}

createGrid(16, 16);

// Link to SO page on using variable between JS and CSS:  https://stackoverflow.com/questions/52563263/using-the-css-grid-repeat-declaration-in-javascript
