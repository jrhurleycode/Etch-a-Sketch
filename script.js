let container = document.getElementById("container");
// container.appendChild(div);
// div.textContent = "THIS IS A TEST";

function createGrid(rows, cols) {
  for (i = 0; i < rows * cols; i++) {
    let cells = document.createElement("div");
    cells.classList.add(`cell`);
    cells.innerText = "X";
    container.appendChild(cells);
  }
}

createGrid(104, 104);


// Link to SO page on using variable between JS and CSS:  https://stackoverflow.com/questions/52563263/using-the-css-grid-repeat-declaration-in-javascript
