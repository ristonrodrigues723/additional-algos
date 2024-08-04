const board = document.getElementById('sudoku-board');
const solveBtn = document.getElementById('solve-btn');
const clearBtn = document.getElementById('clear-btn');

let sudokuArray = Array(9).fill().map(() => Array(9).fill(0));

function createBoard() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            const input = document.createElement('input');
            input.type = 'number';
            input.min = 1;
            input.max = 9;
            input.addEventListener('input', (e) => {
                sudokuArray[i][j] = e.target.value ? parseInt(e.target.value) : 0;
            });
            cell.appendChild(input);
            board.appendChild(cell);
        }
    }
}

function updateBoard() {
    const cells = board.querySelectorAll('.cell input');
    cells.forEach((cell, index) => {
        const i = Math.floor(index / 9);
        const j = index % 9;
        cell.value = sudokuArray[i][j] || '';
    });
}

function isValid(num, row, col) {
    for (let i = 0; i < 9; i++) {
        if (sudokuArray[row][i] === num || sudokuArray[i][col] === num) {
            return false;
        }
    }

    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;

    for (let i = boxRow; i < boxRow + 3; i++) {
        for (let j = boxCol; j < boxCol + 3; j++) {
            if (sudokuArray[i][j] === num) {
                return false;
            }
        }
    }

    return true;
}

function solveSudoku() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (sudokuArray[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(num, row, col)) {
                        sudokuArray[row][col] = num;
                        updateBoard();

                        if (solveSudoku()) {
                            return true;
                        }

                        sudokuArray[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function clearBoard() {
    sudokuArray = Array(9).fill().map(() => Array(9).fill(0));
    updateBoard();
}

solveBtn.addEventListener('click', () => {
    if (solveSudoku()) {
        console.log('Sudoku solved!');
    } else {
        console.log('No solution exists.');
    }
});

clearBtn.addEventListener('click', clearBoard);

createBoard();