let container = document.getElementById("container");
const slider = document.getElementById("slider");
const gridText = document.getElementById("gridText");
const defaultGridSize = 58;
const newGridSize = "";

// slider.onmousemove = (e) => updateGridText(e.target.value);
slider.onmousemove = (e) => {
  updateGridText(e.target.value);
  createGrid(slider.value);
};
function updateGridText(value) {
  gridText.innerHTML = `${value} x ${value}`;
}

function createGrid(size) {
  container.innerText = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gap = `0px`;

  for (i = 0; i < size * size; i++) {
    let cells = document.createElement("div");
    cells.classList.add(`cell`);
    cells.innerText = "";
    container.appendChild(cells);
  }
}

createGrid(defaultGridSize);

// Link to SO page on using variable between JS and CSS:  https://stackoverflow.com/questions/52563263/using-the-css-grid-repeat-declaration-in-javascript
