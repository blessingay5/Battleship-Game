// test that each player object contains it own gameboard and ships

import { Player } from '../modules/player';
import { Gameboard } from '../modules/gameboard';
describe('Player Object', () => {
    let humanPlayer;
    let computerPlayer;
    let enemyBoard;

    beforeEach(() => {
        humanPlayer = new Player('human');
        computerPlayer = new Player('computer');
        enemyBoard = new Gameboard();
    });
    test("creates human and computer player types", () => {
        expect(humanPlayer.type).toBe('human');
        expect(computerPlayer.type).toBe('computer');
        expect(humanPlayer.gameboard).toBeInstanceOf(Gameboard);
    });
    test("human can attack enemy's gameboard at any coordinate", () => {
        const result = humanPlayer.attack(enemyBoard, 0, 0);
        expect(result).toBe('miss');
        expect(enemyBoard.attackedCoordinates.has('0,0')).toBe(true);  
    });
    test("computer makes a valid random attack on enemy board", () => {
      const result = computerPlayer.randomAttack(enemyBoard);
      expect(["hit", "miss"]).toContain(result);
      expect(enemyBoard.attackedCoordinates.size).toBe(1);
    });
    test("computer does not attack the same coordinate twice", () => {
      for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
          if (!(x === 9 && y === 9)) {
            enemyBoard.receiveAttack(x, y);
          }
        }
      }

      // Only (9, 9) remains
      computerPlayer.randomAttack(enemyBoard);
      expect(enemyBoard.attackedCoordinates.has("9,9")).toBe(true);
      expect(enemyBoard.attackedCoordinates.size).toBe(100);
    });
})