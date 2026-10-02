import { Player } from "./player.js";
import { Ship } from "./ship.js";

export class GameController {
  constructor() {
    this.player = new Player("human");
    this.computer = new Player("computer");
    this.activePlayer = this.player;
    this.isGameOver = false;

    // Standard Battleship fleet sizes
    this.shipLengths = [4, 3, 3, 2,1];

    // Auto-place computer ships randomly at start
    this.placeComputerShips();
  }

  placeRandomly(board, ship) {
    let placed = false;
    while (!placed) {
      const x = Math.floor(Math.random() * board.size);
      const y = Math.floor(Math.random() * board.size);
      const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
      placed = board.placeShip(ship, x, y, orientation);
    }
  }

  placeComputerShips() {
    this.shipLengths.forEach((length) => {
      this.placeRandomly(this.computer.gameboard, new Ship(length));
    });
  }

  placePlayerShipsRandomly() {
    this.player.gameboard = new this.player.gameboard.constructor();
    this.shipLengths.forEach((length) => {
      this.placeRandomly(this.player.gameboard, new Ship(length));
    });
  }

  playTurn(x, y) {
    if (this.isGameOver || this.activePlayer !== this.player) return false;

    // 1. Human attacks computer board
    const playerAttackResult = this.player.attack(
      this.computer.gameboard,
      x,
      y,
    );
    if (!playerAttackResult) return false; // Invalid or repeated cell

    // Check if Human won
    if (this.computer.gameboard.allShipsSunk()) {
      this.isGameOver = true;
      return { playerAttack: playerAttackResult, winner: "Player" };
    }

    // 2. Switch turn to Computer
    this.activePlayer = this.computer;
    const computerAttackResult = this.computer.randomAttack(
      this.player.gameboard,
    );

    // Check if Computer won
    if (this.player.gameboard.allShipsSunk()) {
      this.isGameOver = true;
      return {
        playerAttack: playerAttackResult,
        computerAttack: computerAttackResult,
        winner: "Computer",
      };
    }

    // Switch back to Human
    this.activePlayer = this.player;

    return {
      playerAttack: playerAttackResult,
      computerAttack: computerAttackResult,
      winner: null,
    };
  }
}
