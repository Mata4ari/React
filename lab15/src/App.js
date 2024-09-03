import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateBoard, fillCell } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);

  const handleCellClick = (row, col) => {
    const value = parseInt(prompt("Введите значение ячейки:", ""));
    if (!isNaN(value) && value >= 1 && value <= 9) {
      dispatch(fillCell(row, col, value));
    }
  };

  return (
    <div>
      <button onClick={() => dispatch(generateBoard())}>Создать новую доску</button>
      <table>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} onClick={() => handleCellClick(rowIndex, colIndex)}>
                  {cell || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;