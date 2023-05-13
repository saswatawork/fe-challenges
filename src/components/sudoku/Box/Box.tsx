import React from "react";
import { useSudoku } from "../SudokuProvider";
import { SUDOKU_ITEM_VAL } from "../interface";
import "./box.css";

type BoxProps = {
  row: number;
  col: number;
  isValid: boolean;
};

export const Box = ({ row, col, isValid }: BoxProps): JSX.Element => {
  const {
    onSudokuItemInput,
    sudokuState: { board },
  } = useSudoku();

  const onBoxInput = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onSudokuItemInput({
        row,
        col,
        val: Number(e.target.value) as SUDOKU_ITEM_VAL,
      });
    },
    [onSudokuItemInput, row, col]
  );

  return (
    <input
      type="number"
      name="sudoku-item"
      className={`sudoku-board__box ${!isValid ? "invalid" : ""}`}
      onChange={onBoxInput}
      value={board[row][col].val ?? ""}
      min={1}
      max={9}
    />
  );
};
