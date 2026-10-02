import { ship } from '../modules/ship.js';
// Write a test to chec if the object include its lenght
describe("ship factory", () => {
    test("Create a ship with the given lenght", () => {
        const myShip = new ship(3);
        expect(myShip.length).toBe(3);
    });
    // track the hits on the ship
    test("Record hits on the ship", () => {
        const myShip = new ship(3);
        myShip.hit();
        expect(myShip.hits).toBe(1);
    });
    // check if the ship is sunk
    test("isSunk returns false when hits are less than length", () => {
        const myShip = new ship(2);
        myShip.hit();
        expect(myShip.isSunk()).toBe(false);
    });
    // check if the ship is sunk
    test("isSunk returns true when hits equal lenght", () => {
      const myShip = new ship(2);
      myShip.hit();
      myShip.hit();
      expect(myShip.isSunk()).toBe(true);
    });
})