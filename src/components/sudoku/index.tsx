import React from "react";
import { SudokuProvider } from "./SudokuProvider";
import { Board } from "./Board/Board";

export const Sudoku = (): JSX.Element => {
  return (
    <SudokuProvider>
      <div className="sudoku">
        <h3>Sudoku</h3>
        <Board />
      </div>
    </SudokuProvider>
  );
};
