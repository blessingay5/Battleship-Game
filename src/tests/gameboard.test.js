 // test to manage ship placement, coordinate validation, receiving attacks, 

import { Gameboard } from '../modules/gameboard.js';
import { Ship } from '../modules/ship.js';

 // recording misses, and reporting when every ship on the board has been sunk.
 describe("Gameboard factory", () => {
    let board;

    beforeEach(() => {
        board = new Gameboard();
    });
    test("places ship at a specific coordinate horizontally", () => {
        const ship = new Ship(3);
        expect(board.placeShip(ship, 0, 0, "horizontal")).toBe(true);
        expect(board.getSquare(0, 0)).toBe(ship);
        expect(board.getSquare(1, 0)).toBe(ship);
        expect(board.getSquare(2, 0)).toBe(ship);
    });
    test("places ship at a specific coordinate vertically", () => {
        const ship = new Ship(2);
        expect(board.placeShip(ship, 1, 1, "vertical")).toBe(true);
        expect(board.getSquare(1, 1)).toBe(ship);
        expect(board.getSquare(1, 2)).toBe(ship);
    });
    test("does not place ship if it goes out of bounds", () => {
        const ship = new Ship(4);
        expect(board.placeShip(ship, 8, 0, "horizontal")).toBe(false);
        expect(board.placeShip(ship, 0, 8, "vertical")).toBe(false);
    });
    test("does not place ship if it overlaps another ship", () => {
        const ship1 = new Ship(3);
        const ship2 = new Ship(2);
        board.placeShip(ship1, 0, 0, "horizontal");
        expect(board.placeShip(ship2, 0, 0, "vertical")).toBe(false);
    });
    test("receiveAttack hits ship and records attack", () => {
      const ship = new Ship(2);
      board.placeShip(ship, 0, 0, "horizontal");
      expect(board.receiveAttack(0, 0)).toBe("hit");
      expect(ship.hits).toBe(1);
    });
    test("receiveAttack records missed attacks", () => {
      expect(board.receiveAttack(5, 5)).toBe("miss");
      expect(board.missedShots).toContainEqual([5, 5]);
    });

    test("rejects attacking the same square twice", () => {
      board.receiveAttack(2, 2);
      expect(board.receiveAttack(2, 2)).toBe(false);
    });

    test("reports allShipsSunk accurately", () => {
      const ship1 = new Ship(1);
      const ship2 = new Ship(2);

      board.placeShip(ship1, 0, 0, "horizontal");
      board.placeShip(ship2, 2, 2, "vertical");

      board.receiveAttack(0, 0); // ship1 sunk
      expect(board.allShipsSunk()).toBe(false);

      board.receiveAttack(2, 2);
      board.receiveAttack(2, 3); // ship2 sunk
      expect(board.allShipsSunk()).toBe(true);
    });
 })