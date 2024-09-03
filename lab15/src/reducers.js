import { getSudoku } from "sudoku-gen";
import { GENERATE_BOARD, FILL_CELL } from "./actions";

const initialState = {
  board: [],
};

const convertToTwoDimensionalArray = (flatArray) => {
  const size = Math.sqrt(flatArray.length);
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(flatArray.slice(i * size, (i + 1) * size));
  }
  return result;
};

const sudokuReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_BOARD:
      const flatBoard = getSudoku("easy");
      const generatedBoard = convertToTwoDimensionalArray(flatBoard);
      return { board: generatedBoard };

    case FILL_CELL:
      const { row, col, value } = action.payload;
      const updatedBoard = state.board.map((row) => [...row]);
      updatedBoard[row][col] = value;
      return { board: updatedBoard };

    default:
      return state;
  }
};

export default sudokuReducer;