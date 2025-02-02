# 🧩 **Sudoku Solver** 🚀

### An interactive Sudoku Solver built with **Backtracking Algorithm**! 🎮
This project allows you to input a partially completed **9x9 Sudoku** puzzle and solves it using the **Depth-First Search (DFS)** approach. It's an excellent showcase of how **backtracking** can be used to solve problems that require exhaustive search.

### 🌟 **Key Features:**
- **Backtracking Algorithm**: Solves Sudoku puzzles using the backtracking technique (DFS).
- **Interactive UI**: Dynamically generated grid where users can input puzzle values.
- **Timer**: Stopwatch feature to track how quickly the puzzle is solved.
- **Instant Solve**: Click **Solve** to let the algorithm fill in the solution.
- **Easy-to-Use**: Just input your puzzle, click solve, and watch the magic happen!
- **Stopwatch**: Track how long it takes for the algorithm to solve the puzzle.

---

### 🚀 **How It Works:**
1. **Input your Sudoku puzzle** by filling the 9x9 grid with numbers from 1 to 9.
2. Click **Solve**, and the algorithm uses **DFS + Backtracking** to find the solution.
3. The algorithm will **validate** each step, ensuring there are no conflicts with rows, columns, or 3x3 subgrids.
4. Once the solution is found, it will fill the grid with the correct values.
5. If no solution exists, you will get an **alert** saying **"No solution found!"**.
6. Use the **Start** and **Stop** buttons to time the solving process. ⏱️

---

---

### 🏃‍♂️ **How to Run:**
1. **Clone or download** the repository to your local machine.
2. Open `index.html` in your favorite **browser**.
3. Enter a **Sudoku puzzle** by typing numbers (1-9) into the grid.
4. Hit the **"Solve"** button and let the algorithm work its magic! 🔮
5. You can track the solving time using the **Stopwatch** feature.
6. Enjoy solving puzzles and testing the algorithm with different inputs! 🎉

---

### 🧠 **Technologies Used:**
- **HTML**: Building the dynamic grid and interface.
- **CSS**: Basic styling to make the Sudoku grid visually appealing.
- **JavaScript**: The main logic for the **backtracking algorithm** (DFS).

---

### ⚙️ **Time Complexity:**
- The worst-case time complexity is **O(9^m)** where **m** is the number of empty cells.
- For a completely empty board, this results in an exponential time complexity of trying every possible number (1-9) for each empty cell.

---



