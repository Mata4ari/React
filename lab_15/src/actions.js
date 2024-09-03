
const SET_SUDOKU = 'SET_SUDOKU';
const SET_SOLVED_STATUS = 'SET_SOLVED_STATUS';
const SET_HIGHLIGHTED_CELLS = 'SET_HIGHLIGHTED_CELLS';
const SET_GAME_STARTED_STATUS = 'SET_GAME_STARTED_STATUS';
const SET_SUDOKU_DATA = 'SET_SUDOKU_DATA';
const SET_INCORRECT_CELLS = 'SET_INCORRECT_CELLS';

export const setSudoku = (sudoku) => ({
    type: SET_SUDOKU,
    payload: sudoku,
});

export const setSolvedStatus = (isSolved) => ({
    type: SET_SOLVED_STATUS,
    payload: isSolved,
});

export const setHighlightedCells = (highlightedCells) => ({
    type: SET_HIGHLIGHTED_CELLS,
    payload: highlightedCells,
});

export const setGameStartedStatus = (isGameStarted) => ({
    type: SET_GAME_STARTED_STATUS,
    payload: isGameStarted,
});

export const setSudokuData = (sudokuData) => ({
    type: SET_SUDOKU_DATA,
    payload: sudokuData,
});

export const setIncorrectCells = (incorrectCells) => ({
    type: SET_INCORRECT_CELLS,
    payload: incorrectCells,
});