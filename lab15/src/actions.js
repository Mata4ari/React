export const GENERATE_BOARD = "GENERATE_BOARD";
export const FILL_CELL = "FILL_CELL";

export const generateBoard = () => ({
    type: GENERATE_BOARD,
});

export const fillCell = (row, col, value) => ({
    type: FILL_CELL,
    payload: { row, col, value },
});