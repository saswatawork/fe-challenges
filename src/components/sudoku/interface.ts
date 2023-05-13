export enum ACTION {
  SET_BOARD_ITEM = "SET_BOARD_ITEM",
  GAME_WON = "GAME_WON",
}

export interface ActionProps {
  type: ACTION;
  payload?: any;
}

export type SUDOKU_ITEM_VAL = null | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface SudokuItem {
  val: SUDOKU_ITEM_VAL;
  isValid: boolean;
}

export type SUDOKU_BOARD = Array<Array<SudokuItem>>;

export interface SudokuInitialState {
  board: SUDOKU_BOARD;
  isGameWon: boolean;
  activeBoxItem: BoxItem | null;
}

export interface BoxItem {
  row: number;
  col: number;
  val: SUDOKU_ITEM_VAL;
}
