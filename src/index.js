import { GameController } from "./modules/gamecontrol.js";
import { renderBoard } from "./dom/domUI.js";
import "./style.css";

let game = new GameController();

const playerBoardElement = document.getElementById("player-board");
const computerBoardElement = document.getElementById("computer-board");
const statusMessage = document.getElementById("status-message");
const randomizeBtn = document.getElementById("randomize-btn");
const restartBtn = document.getElementById("restart-btn");

function updateDisplay() {
  renderBoard(playerBoardElement, game.player.gameboard, false);
  renderBoard(
    computerBoardElement,
    game.computer.gameboard,
    true,
    handleCellClick,
  );
}

function handleCellClick(x, y) {
  if (game.isGameOver) return;

  const turnOutcome = game.playTurn(x, y);
  if (!turnOutcome) return;

  updateDisplay();

  if (turnOutcome.winner) {
    statusMessage.textContent = `${turnOutcome.winner} wins the battle! `;
  } else {
    statusMessage.textContent =
      "Your turn! Choose a target on the opponent board.";
  }
}

randomizeBtn.addEventListener("click", () => {
  if (game.isGameOver) return;
  game.placePlayerShipsRandomly();
  updateDisplay();
});

restartBtn.addEventListener("click", () => {
  game = new GameController();
  game.placePlayerShipsRandomly();
  statusMessage.textContent = "New game started! Fire when ready.";
  updateDisplay();
});
document.addEventListener("DOMContentLoaded", () => {
  // Move initial setup here
  game.placePlayerShipsRandomly();
  updateDisplay();
});

// Initial Setup
game.placePlayerShipsRandomly();
updateDisplay();
