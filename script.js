let container = document.getElementById("container");
// container.appendChild(div);
// div.textContent = "THIS IS A TEST";

function createGrid(rows, cols) {
  for (i = 0; i <= rows * cols; i++) {
    let cells = document.createElement("div");
    cells.classList.add(`cell`);
    cells.innerText = "X";
    container.appendChild(cells);
  }
}

createGrid(104, 104);
