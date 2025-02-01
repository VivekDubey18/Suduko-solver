document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const solveBtn = document.getElementById("solve-btn");
    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");
    const stopwatchDisplay = document.getElementById("stopwatch");

    let sudoku = Array.from({ length: 9 }, () => Array(9).fill(0));

    // Stopwatch variables
    let timer;
    let seconds = 0;

    function updateStopwatch() {
        let min = String(Math.floor(seconds / 60)).padStart(2, '0');
        let sec = String(seconds % 60).padStart(2, '0');
        stopwatchDisplay.textContent = `${min}:${sec}`;
        seconds++;
    }

    startBtn.addEventListener("click", () => {
        if (!timer) {
            timer = setInterval(updateStopwatch, 1000);
        }
    });

    stopBtn.addEventListener("click", () => {
        clearInterval(timer);
        timer = null;
    });

    // Generate a 9x9 grid
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let cell = document.createElement("input");
            cell.type = "text";
            cell.className = "cell";
            cell.maxLength = 1;
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.oninput = (e) => {
                let val = e.target.value;
                sudoku[i][j] = val ? parseInt(val) : 0;
            };
            board.appendChild(cell);
        }
    }

    function isValid(board, row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num || board[i][col] === num) return false;
        }
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[startRow + i][startCol + j] === num) return false;
            }
        }
        return true;
    }

    function solve(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            if (solve(board)) return true;
                            board[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    solveBtn.addEventListener("click", () => {
        if (solve(sudoku)) {
            document.querySelectorAll(".cell").forEach(cell => {
                let row = cell.dataset.row;
                let col = cell.dataset.col;
                cell.value = sudoku[row][col];
            });
        } else {
            alert("No solution exists!");
        }
    });
});
