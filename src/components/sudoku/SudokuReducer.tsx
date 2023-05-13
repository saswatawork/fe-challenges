import { CONFIG } from "./utils/config";
import {
  ACTION,
  ActionProps,
  SudokuInitialState,
  SudokuItem,
} from "./interface";

const defaultBoard = Array.from({ length: CONFIG.GRID.ROW }, () =>
  Array.from(
    { length: CONFIG.GRID.COLUMN },
    (): SudokuItem => ({
      val: null,
      isValid: true,
    })
  )
);

export const sudokuInitialState: SudokuInitialState = {
  board: defaultBoard,
  isGameWon: false,
  activeBoxItem: null,
};

export const SudokuReducer = (
  state: SudokuInitialState,
  { type, payload }: ActionProps
) => {
  const { SET_BOARD_ITEM } = ACTION;

  switch (type) {
    case SET_BOARD_ITEM:
      return {
        ...state,
        board: payload.board,
        activeBoxItem: payload.activeBoxItem,
        isGameWon: payload.isGameWon,
      };
    default:
      return state;
  }
};
