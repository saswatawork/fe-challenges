import React from "react";
import { BoardRow } from "./BoardRow";
import { Box } from "../Box/Box";
import { useSudoku } from "../SudokuProvider";

export const Board = (): JSX.Element => {
  const {
    sudokuState: { board, isGameWon },
  } = useSudoku();

  return (
    <div className="sudoku-board">
      {isGameWon && <h3>You won the Game!</h3>}
      {board.map((boardItem, rowIndex) => (
        <BoardRow>
          {boardItem.map(({ isValid }, colIndex) => (
            <Box row={rowIndex} col={colIndex} isValid={isValid} />
          ))}
        </BoardRow>
      ))}
    </div>
  );
};
