# Sudoku Solver

A Sudoku Solver built using the **Backtracking algorithm**. This project allows users to input a partially completed 9x9 Sudoku puzzle, and the solver will find the solution (if one exists) using a depth-first search (DFS) approach.

### Features:
- **Backtracking algorithm** to solve Sudoku puzzles.
- **Dynamic grid generation**: Creates a 9x9 grid where users can input their puzzle.
- **Timer**: Stopwatch feature to track how long the solver takes to solve the puzzle.
- **Solve Button**: Solves the Sudoku puzzle when clicked.
- **Stop Button**: Stops the timer.
- **Valid Input Check**: Ensures only valid Sudoku numbers (1-9) are entered.

### How It Works:
1. The user inputs a Sudoku puzzle into the grid.
2. The algorithm uses **DFS** and **backtracking** to find the solution.
3. The program checks if the number placed is valid by ensuring it doesn't violate Sudoku rules (no repeating numbers in rows, columns, or 3x3 subgrids).
4. Once the solution is found, it fills the grid with the solved puzzle.
5. If no solution exists, it notifies the user with an alert.


### How to Run:
1. Clone this repository to your local machine or download the project files.
2. Open the `index.html` file in a browser.
3. Start solving a Sudoku puzzle by typing numbers into the grid.
4. Press the **"Solve"** button to let the algorithm solve the puzzle.
5. Use the **"Start"** and **"Stop"** buttons to manage the timer.

### Installation:
No installation is required. This is a **client-side application** that runs directly in the browser.

### Technologies Used:
- **HTML**: For the user interface (UI) and Sudoku grid.
- **CSS**: Basic styling to make the Sudoku grid visually appealing.
- **JavaScript**: The main logic for solving the puzzle using the **backtracking algorithm**.

### Time Complexity:
The worst-case time complexity of the backtracking algorithm is **O(9^m)**, where **m** is the number of empty cells (up to 81 for a completely empty board). In each empty cell, we try all 9 numbers, which results in this exponential time complexity in the worst case.

