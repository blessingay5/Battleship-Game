# Battleship Project

Hi! This is my version of the classic Battleship game, built as part of the Full Stack JavaScript path on [The Odin Project](https://theodinproject.com). 

**[Live Demo Link](YOUR_LIVE_DEMO_URL_HERE)**

## Features

- **Play Against the Computer:** Try to sink all the computer's ships before it finds yours!
- **TDD Backed:** The game rules are built entirely using Jest tests to make sure things like coordinates and ship hits work properly.
- **Random Placement:** Click a button to randomly place your ships on the board if you don't want to choose yourself.
- **Visual Feedback:** Grid squares change colors when you hit or miss a ship, and an alert lets you know when someone wins.

## Tools Used

- HTML5 & CSS3 (Grid and Flexbox for the boards)
- Vanilla JavaScript (ES6 Modules)
- **Jest & Babel** (For writing and running my first unit tests)
- **Webpack** (To bundle my JS files and load CSS)

## How the Code is Structured

I tried my best to separate the actual game logic from the DOM manipulation so the code doesn't get too messy:

- **`Ship`:** A factory function/class that tracks how long a ship is, how many times it got hit, and if it's sunk.
- **`Gameboard`:** Manages the 10x10 grids. It places the ships, checks if an attack hit a ship or missed, and tracks if all ships are destroyed.
- **`Player`:** Creates the human player and the computer player (which picks random coordinates to attack).
- **`DOM Controller`:** Handles the click events, renders the boards on the screen, and updates the text to show whose turn it is.

## How to Run it Locally

If you want to look at my code or run the tests yourself, follow these steps:

1. **Clone this repo:**
   ```bash
   git clone https://github.com
   cd YOUR_REPO_NAME
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the Jest tests:**
   ```bash
   npm test
   ```

4. **Build the project:**
   ```bash
   npm run build
   ```
   *Then you can open the `index.html` file inside the `dist` folder using Live Server!*

## Biggest Takeaways & Challenges

- **Learning Jest:** At first, writing tests *before* writing code felt really weird and slowed me down. But once I got the hang of it, it actually saved me hours of debugging later on.
- **Thinking in Modules:** Splitting everything up into small files was confusing at start, but it made finding bugs so much easier than having one massive JavaScript file.
- **AI Logic:** Making the computer not attack the same square twice took some trial and error with arrays, but it works now!

## Acknowledgments

- The Odin Project team for creating such a challenging but rewarding project.