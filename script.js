const container = document.getElementById("container");
const slider = document.getElementById("slider");
const gridText = document.getElementById("gridText");
const colorSelector = document.querySelector("#color");
const cell = document.getElementById("cell");
const colorButton = document.getElementById("colorButton");
const eraser = document.getElementById("eraser");
const random = document.getElementById("random");
const clear = document.getElementById("clear");
const hexText = document.getElementById("hexText");
const defaultGridSize = 50;
let hexColor = colorSelector.value;
let newGridSize = defaultGridSize;

//global mouse down. mouseDown eventListner activates only once per click.  this allows page to recognize mousedown constantly.
let onMouseDown = false;
document.body.onmousedown = () => (onMouseDown = true);
document.body.onmouseup = () => (onMouseDown = false);

//States
colorButton.onclick = () => {
	colorButton.className = "ACTIVATED";
	eraser.className = "deactivated";
	random.className = "deactivated";
};

eraser.onclick = () => {
	eraser.className = "ACTIVATED";
	colorButton.className = "deactivated";
	random.className = "deactivated";
};

random.onclick = () => {
	random.className = "ACTIVATED";
	colorButton.className = "deactivated";
	eraser.className = "deactivated";
};

//Clear grid
clear.onclick = () => {
	createGrid(newGridSize);
};

//Slider
slider.onmousemove = (e) => {
	updateGridText(e.target.value);
	createGrid(slider.value);
	newGridSize = `${e.target.value}`;
};

colorSelector.onclick = (e) => {
	updateHexText(e.colorSelector.value);
};

function updateHexText(value) {
	colorSelector.innerHTML = `${value}`;
}

function updateGridText(value) {
	gridText.innerHTML = `${value} x ${value}`;
}

function updateColor(e) {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	if (e.type == "mouseover" && !onMouseDown) return;

	if (colorButton.className === "ACTIVATED") {
		e.target.style.backgroundColor = `${colorSelector.value}`;
	}

	if (eraser.className === "ACTIVATED") e.target.style.backgroundColor = "#ffffff";

	if (random.className === "ACTIVATED") e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
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

//test
