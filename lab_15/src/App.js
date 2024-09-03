import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSudoku } from 'sudoku-gen';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const sudoku = useSelector((state) => state.sudoku);
  const isSolved = useSelector((state) => state.isSolved);
  const highlightedCells = useSelector((state) => state.highlightedCells);
  const isGameStarted = useSelector((state) => state.isGameStarted);
  const sudokuData = useSelector((state) => state.sudokuData);

  useEffect(() => {
    generateSudoku();
  }, []);


  function hintSudokuBoard() {
    const emptyCells = [];

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (sudoku[i][j] === '-') {
          emptyCells.push([i, j]);
        }
      }
    }

    while (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const [row, col] = emptyCells[randomIndex];

      const validValue = sudokuData?.solution[row * 9 + col];

      if (validValue) {
        const updatedSudoku = [...sudoku];
        updatedSudoku[row][col] = validValue;
        dispatch({ type: 'SET_SUDOKU', payload: updatedSudoku });
        break;
      } else {
        emptyCells.splice(randomIndex, 1);
      }
    }
  }

  function generateSudoku() {
    dispatch({ type: 'SET_IS_GAME_STARTED', payload: false });
    dispatch({ type: 'SET_HIGHLIGHTED_CELLS', payload: [] });
    dispatch({ type: 'SET_IS_SOLVED', payload: false });
    const newData = getSudoku();
    dispatch({ type: 'SET_SUDOKU_DATA', payload: newData });
    const puzzle = newData ? newData.puzzle : '';
    const parsedSudoku = parsePuzzle(puzzle);
    dispatch({ type: 'SET_SUDOKU', payload: parsedSudoku });
  }


  function parsePuzzle(puzzleString) {
    const puzzleArray = puzzleString.split('');
    const sudokuArray = [];

    for (let i = 0; i < 9; i++) {
      const row = puzzleArray.slice(i * 9, (i + 1) * 9);
      sudokuArray.push(row);
    }

    return sudokuArray;
  }

  const handleCellClick = (rowIndex, cellIndex) => {
    const number = prompt('Введите число (1-9):');
    if (number && /^[1-9]$/.test(number)) {
      const updatedSudoku = [...sudoku];
      updatedSudoku[rowIndex][cellIndex] = number;
  
      const updatedHighlightedCells = highlightedCells.filter(
        ([row, col]) => row !== rowIndex || col !== cellIndex
      );
  
      if (sudokuData?.solution[rowIndex * 9 + cellIndex] !== number) {
        updatedHighlightedCells.push([rowIndex, cellIndex]);
      }
  
      dispatch({ type: 'SET_HIGHLIGHTED_CELLS', payload: updatedHighlightedCells });
      dispatch({ type: 'SET_SUDOKU', payload: updatedSudoku });
    }
  }

  function checkSudoku() {
    const updatedHighlightedCells = [];
    let isValid = true;

    for (let i = 0; i < 9; i++) {
      const row = sudoku[i];
      const rowSet = new Set(row);

      if (rowSet.size !== 9) {
        isValid = false;
        for (let j = 0; j < 9; j++) {
          updatedHighlightedCells.push([i, j]);
        }
      }
    }

    for (let j = 0; j < 9; j++) {
      const column = sudoku.map((row) => row[j]);
      const columnSet = new Set(column);

      if (columnSet.size !== 9) {
        isValid = false;
        for (let i = 0; i < 9; i++) {
          updatedHighlightedCells.push([i, j]);
        }
      }
    }

    for (let blockRow = 0; blockRow < 3; blockRow++) {
      for (let blockCol = 0; blockCol < 3; blockCol++) {
        const block = [];

        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            block.push(sudoku[blockRow * 3 + i][blockCol * 3 + j]);
          }
        }

        const blockSet = new Set(block);

        if (blockSet.size !== 9) {
          isValid = false;
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              updatedHighlightedCells.push([blockRow * 3 + i, blockCol * 3 + j]);
            }
          }
        }
      }
    }

    dispatch({ type: 'SET_HIGHLIGHTED_CELLS', payload: updatedHighlightedCells });
    dispatch({ type: 'SET_IS_SOLVED', payload: isValid });
  }

  return (
    <div className={`App ${isSolved ? 'solved' : ''} ${isGameStarted ? 'game-started' : ''}`}>
      <table className="sudoku-board">
        <tbody>
          {sudoku.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const isHighlightedCell = highlightedCells.some(([row, col]) => row === rowIndex && col === cellIndex);
                return (
                  <td
                    key={cellIndex}
                    className={`sudoku-cell ${cell ? (isHighlightedCell ? 'invalid-cell' : 'valid-cell') : ''}`}
                    onClick={() => handleCellClick(rowIndex, cellIndex)}
                    data-row={rowIndex}
                    data-cell={cellIndex}
                  >
                    {cell !== '-' ? cell : ''}
                    {isHighlightedCell && <span className="invalid-cell"></span>}
                    {!isHighlightedCell && <span className="valid-cell"></span>}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
        <button onClick={checkSudoku}>Проверить поле</button>
        <button onClick={generateSudoku}>Новая игра</button>
        <button onClick={hintSudokuBoard}>Подсказка</button>
      </div>
    </div>
  );
}

export default App;