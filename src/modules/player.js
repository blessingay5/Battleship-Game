import { Gameboard } from "./gameboard.js";

export class Player {
  constructor(type = "Human") {
    this.type = type;
    this.gameboard = new Gameboard();
  }
  attack(enemyBoard, x, y) {
    return enemyBoard.receiveAttack(x, y);
  }
  randomAttack(enemyBoard) {
    if (
      enemyBoard.attackedCoordinates.size >=
      enemyBoard.size * enemyBoard.size
    ) {
      return false; // Board fully attacked
    }

    let x, y, coordKey;
    do {
      x = Math.floor(Math.random() * enemyBoard.size);
      y = Math.floor(Math.random() * enemyBoard.size);
      coordKey = `${x},${y}`;
    } while (enemyBoard.attackedCoordinates.has(coordKey));

    return enemyBoard.receiveAttack(x, y);
  }
}