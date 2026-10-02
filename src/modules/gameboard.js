export class Gameboard {
  constructor(size = 10) {
    this.size = size;
    // Create a 10x10 2D array filled with null
    this.grid = Array(size)
      .fill(null)
      .map(() => Array(size).fill(null));

    this.ships = [];
    this.missedShots = [];
    this.attackedCoordinates = new Set(); // Stores "x,y" strings for fast lookup
  }

  // Returns the contents of a grid cell or null if out of bounds
  getSquare(x, y) {
    if (this.isOutOfBounds(x, y)) return null;
    return this.grid[y][x];
  }

  // Helper method to check if coordinates are within the board
  isOutOfBounds(x, y) {
    return x < 0 || x >= this.size || y < 0 || y >= this.size;
  }

  // Check if a ship can fit without going off-board or overlapping
  canPlaceShip(ship, x, y, orientation) {
    for (let i = 0; i < ship.length; i++) {
      const currentX = orientation === "horizontal" ? x + i : x;
      const currentY = orientation === "vertical" ? y + i : y;

      if (this.isOutOfBounds(currentX, currentY)) return false;
      if (this.grid[currentY][currentX] !== null) return false; // Cell already occupied
    }
    return true;
  }

  // Places ship onto the grid if valid
  placeShip(ship, x, y, orientation = "horizontal") {
    if (!this.canPlaceShip(ship, x, y, orientation)) return false;

    for (let i = 0; i < ship.length; i++) {
      const currentX = orientation === "horizontal" ? x + i : x;
      const currentY = orientation === "vertical" ? y + i : y;
      this.grid[currentY][currentX] = ship;
    }

    this.ships.push(ship);
    return true;
  }

  // Processes an attack at (x, y)
  receiveAttack(x, y) {
    if (this.isOutOfBounds(x, y)) return false;

    const coordKey = `${x},${y}`;
    // Prevent attacking the same spot twice
    if (this.attackedCoordinates.has(coordKey)) return false;

    this.attackedCoordinates.add(coordKey);

    const target = this.grid[y][x];

    if (target) {
      target.hit(); // Call hit() on the Ship object at this coordinate
      return "hit";
    } else {
      this.missedShots.push([x, y]);
      return "miss";
    }
  }

  // Returns true if every ship placed on this board has been sunk
  allShipsSunk() {
    if (this.ships.length === 0) return false;
    return this.ships.every((ship) => ship.isSunk());
  }
}
