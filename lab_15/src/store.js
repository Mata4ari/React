import { createStore } from 'redux';

const initialState = {
    sudoku: [],
    isSolved: false,
    highlightedCells: [],
    isGameStarted: false,
    sudokuData: null,
    incorrectCells: [],
};

const SET_SUDOKU = 'SET_SUDOKU';
const SET_SOLVED_STATUS = 'SET_SOLVED_STATUS';
const SET_HIGHLIGHTED_CELLS = 'SET_HIGHLIGHTED_CELLS';
const SET_GAME_STARTED_STATUS = 'SET_GAME_STARTED_STATUS';
const SET_SUDOKU_DATA = 'SET_SUDOKU_DATA';
const SET_INCORRECT_CELLS = 'SET_INCORRECT_CELLS';

const sudokuReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUDOKU:
            return { ...state, sudoku: action.payload };
        case SET_SOLVED_STATUS:
            return { ...state, isSolved: action.payload };
        case SET_HIGHLIGHTED_CELLS:
            return { ...state, highlightedCells: action.payload };
        case SET_GAME_STARTED_STATUS:
            return { ...state, isGameStarted: action.payload };
        case SET_SUDOKU_DATA:
            return { ...state, sudokuData: action.payload };
        case SET_INCORRECT_CELLS:
            return { ...state, incorrectCells: action.payload };
        default:
            return state;
    }
};

const store = createStore(sudokuReducer);

export default store;