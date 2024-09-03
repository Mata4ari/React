const initialState = {
    sudoku: [],
    isSolved: false,
    highlightedCells: [],
    isGameStarted: false,
    sudokuData: null,
    incorrectedCells: []
    };

export default function sudokuReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SUDOKU':
            return {
                ...state,
                sudoku: action.payload,
            };
        case 'SET_IS_SOLVED':
            return {
                ...state,
                isSolved: action.payload,
            };
        case 'SET_HIGHLIGHTED_CELLS':
            return {
                ...state,
                highlightedCells: action.payload,
            };
        case 'SET_IS_GAME_STARTED':
            return {
                ...state,
                isGameStarted: action.payload,
            };
        case 'SET_SUDOKU_DATA':
            return {
                ...state,
                sudokuData: action.payload,
            };
        case 'SET_INCORRECTED_CELLS':
            return {
                ...state,
                incorrectedCells: action.payload,
            };
        default:
        return state;
    }
}