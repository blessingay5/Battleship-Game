export function renderBoard(
  containerElement,
  gameboard,
  isEnemy = false,
  onCellClick = null,
) {
  containerElement.innerHTML = "";

  const rowLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  // Top-left blank corner cell
  const cornerLabel = document.createElement("div");
  cornerLabel.classList.add("grid-label");
  containerElement.appendChild(cornerLabel);

  // Column Headers (1 to 10)
  for (let col = 1; col <= gameboard.size; col++) {
    const colLabel = document.createElement("div");
    colLabel.classList.add("grid-label");
    colLabel.textContent = col;
    containerElement.appendChild(colLabel);
  }

  // Render Rows (A-J) with Grid Cells
  for (let y = 0; y < gameboard.size; y++) {
    // Row Header (Letter)
    const rowLabel = document.createElement("div");
    rowLabel.classList.add("grid-label");
    rowLabel.textContent = rowLetters[y];
    containerElement.appendChild(rowLabel);

    // Row Cells
    for (let x = 0; x < gameboard.size; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.x = x;
      cell.dataset.y = y;

      const squareContent = gameboard.getSquare(x, y);
      const isAttacked = gameboard.attackedCoordinates.has(`${x},${y}`);

      if (squareContent && !isEnemy) {
        cell.classList.add("ship");
      }

      if (isAttacked) {
        if (squareContent) {
          cell.classList.add("hit");
        } else {
          cell.classList.add("miss");
        }
      }

      if (isEnemy && onCellClick && !isAttacked) {
        cell.addEventListener("click", () => onCellClick(x, y));
      }

      containerElement.appendChild(cell);
    }
  }
}
