let container = document.getElementById("container");

const slider = document.getElementById("slider");
const gridText = document.getElementById("gridText");
const colorSelector = document.querySelector("#color");
const cell = document.getElementById("cell");
const eraser = document.getElementById("eraser");
const random = document.getElementById("random");
const defaultGridSize = 50;
const newGridSize = "";
let cells = document.createElement("div");

//global mouse down. mouseDown eventListner activates only once per click.  this allows page to recognize mousedown constantly.
let onMouseDown = false;
document.body.onmousedown = () => (onMouseDown = true);
document.body.onmouseup = () => (onMouseDown = false);

slider.onmousemove = (e) => {
  updateGridText(e.target.value);
  createGrid(slider.value);
};

eraser.onclick = (e) => {
  colorSelector.value = "#FFFFFF";
};

random.onclick = (e) => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  randomColor = `rgb(${red}, ${green}, ${blue})`;
};

function updateGridText(value) {
  gridText.innerHTML = `${value} x ${value}`;
}

function updateColor(e) {
  console.log(colorSelector.value);
  if (e.type == "mouseover" && !onMouseDown) return;
  e.target.style.backgroundColor = `${colorSelector.value}`;
}

function createGrid(size) {
  container.innerText = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gap = `0px`;

  for (i = 0; i < size * size; i++) {
    let cells = document.createElement("div");
    cells.setAttribute("id", `cell`);
    cells.addEventListener("mousedown", updateColor);
    cells.addEventListener("mouseover", updateColor);
    container.appendChild(cells);
  }
}

createGrid(defaultGridSize);

// Link to SO page on using variable between JS and CSS:  https://stackoverflow.com/questions/52563263/using-the-css-grid-repeat-declaration-in-javascript
