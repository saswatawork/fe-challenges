import React from "react";
import { SudokuReducer, sudokuInitialState } from "./SudokuReducer";
import { ACTION, ActionProps, BoxItem, SudokuInitialState } from "./interface";
import { SudokuGameValidator } from "./utils/GameValidator";

interface SudokuContextProps {
  sudokuState: SudokuInitialState;
  sudokuDispatch: React.Dispatch<ActionProps>;
  onSudokuItemInput: (v: BoxItem) => void;
}

const SudokuContext = React.createContext<SudokuContextProps | null>(null);

export const useSudoku = () => {
  const sudoku = React.useContext(SudokuContext);

  if (!sudoku) {
    throw new Error("useSudoku must be wrapped inside the SudokuProvider");
  }

  return sudoku;
};

type SudokuProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const SudokuProvider = ({ children }: SudokuProviderProps) => {
  const [sudokuState, sudokuDispatch] = React.useReducer(
    SudokuReducer,
    sudokuInitialState
  );

  const onSudokuItemInput = React.useCallback(
    ({ row, col, val }: BoxItem) => {
      let boardCopy = [...sudokuState.board];
      boardCopy[row][col].val = val;
      if (val && (val > 9 || val < 0)) {
        boardCopy[row][col].val = null;
      }
      const activeBoxItem = { row, col, val };
      const gameValidator = new SudokuGameValidator(boardCopy, activeBoxItem);
      gameValidator.validateBoard();
      boardCopy = gameValidator.board;
      sudokuDispatch({
        type: ACTION.SET_BOARD_ITEM,
        payload: {
          board: boardCopy,
          activeBoxItem: { row, col, val },
          isGameWon: gameValidator.isGameWon,
        },
      });
    },
    [sudokuState.board]
  );

  const value = React.useMemo(() => {
    return { sudokuState, sudokuDispatch, onSudokuItemInput };
  }, [sudokuState, sudokuDispatch, onSudokuItemInput]);

  return (
    <SudokuContext.Provider value={value}>{children}</SudokuContext.Provider>
  );
};
